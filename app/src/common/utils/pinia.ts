import type { App } from 'vue'
import { createPinia } from 'pinia'

export { defineStore, type IStoreDefine } from '@infra/store'

// const COUNTER_STORE_KEY: InjectionKey<typeof useCounterStore> = Symbol('COUNTER_STORE_KEY')
// export const provideCounterStore = (app: App) => app.provide(COUNTER_STORE_KEY, useCounterStore)
// export const injectCounterStore = () => inject(COUNTER_STORE_KEY)

export const initStore = (app: App) => {
  app.use(createPinia())
}
