import type { ICreateRouter } from '@infra/types/router'
import { createWebHashHistory, createWebHistory, createRouter as originCreator } from 'vue-router'

export const createRouter: ICreateRouter = (routes, historyMode = true) =>
  originCreator({
    history: historyMode ? createWebHistory(import.meta.env.BASE_URL) : createWebHashHistory(),
    routes
  })
