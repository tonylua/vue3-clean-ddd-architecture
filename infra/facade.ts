// 防腐层 facade
import type { HttpClient } from './types/http'
import axios from './modules/http'

export const http: HttpClient = axios

export { createStore, defineStore } from './modules/store'
export { createRouter } from './modules/router'
