import { reactive } from 'vue'
import { http } from '@facade'
import { Colors } from '../models/Color'

type ColorsRes = string[]

export function useColors() {
  const colorsInfo = reactive({})

  const fetchColors = async () => {
    const res = await http.get<ColorsRes>('/api/colors')
    console.log('返回值类型with自动推测', res.code, res.data)
    return [...Object.values(Colors), ...res.data]
  }

  return {
    colorsInfo,
    fetchColors
  }
}
