// 防腐层类型定义
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptorConfig {
  headers: {
    'X-Access-Token'?: string
  }
}

interface RequestInterceptor {
  use(
    onFulfilled?: (
      config: RequestInterceptorConfig
    ) => RequestInterceptorConfig | Promise<RequestInterceptorConfig>,
    onRejected?: (error: any) => any
  ): number
}

interface ResponseInterceptorConfig<T = any> {
  code: number
  message: string
  data: T
}

export type ResponseType<T> = AxiosResponse<ResponseInterceptorConfig<T>>

interface ResponseInterceptor {
  use<T = any>(
    onFulfilled?: (response: ResponseType) => T | Promise<T>,
    onRejected?: (error: any) => any
  ): number
}

interface RequestConfig extends AxiosRequestConfig {
  headers?: {
    'X-Access-Token'?: string
  }
  slienceResponse?: boolean
}

// http请求实例类型
export interface HttpClient extends AxiosInstance {
  <T = any, R = ResponseType<T>>(config: RequestConfig): Promise<R>
  <T = any, R = ResponseType<T>>(url: string, config?: RequestConfig): Promise<R>
  interceptors: {
    request: RequestInterceptor
    response: ResponseInterceptor
  }
  get<T = any, R = ResponseType<T>['data'], D = any>(
    url: string,
    config?: RequestConfig<D>
  ): Promise<R>
  post<T = any, R = ResponseType<T>['data'], D = any>(
    url: string,
    data?: D,
    config?: RequestConfig<D>
  ): Promise<R>
}
