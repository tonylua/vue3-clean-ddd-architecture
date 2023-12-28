import type { RouteRecordRaw, Router } from 'vue-router'

export type IRoutes = Readonly<RouteRecordRaw[]>

export type IRouter = Router

export type ICreateRouter = (routes: IRoutes, historyMode?: boolean) => IRouter
