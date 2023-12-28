import axios from 'axios'
import r from '@/common/utils/router'

const instance = axios.create({
  baseURL: '',
  timeout: 10000
})

;['get', 'delete'].forEach((methodName) => {
  const originFn = instance[methodName]
  instance[methodName] = (url, data, config) =>
    originFn.call(instance, url, {
      ...config,
      params: data
    })
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers['X-Access-Token'] = token
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    const data = response.data
    if (data.code !== 200 && !response.config.slienceResponse) alert(data.message)
    return data
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const { router } = r
      router.push(`/login?redirect=${router.currentRoute.path}`)
    }
    return Promise.reject(error)
  }
)

export default instance
