import { createRouter } from '@facade'
import type { App } from 'vue'
import type { IRouter, IRoutes } from '@infra/types/router'

let _router: IRouter

export const initRouter = (app: App, routes: IRoutes) => {
  _router = createRouter(routes, false)
  app.use(_router)
  Object.freeze(_router)
}

export default {
  get router() {
    return _router
  }
}
