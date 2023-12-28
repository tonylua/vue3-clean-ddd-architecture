import { defineStore } from '@facade'

type S = { count: number }
type G = Record<string, (state: S) => number>

export default defineStore<string, S, G>('counter', {
  state: () => {
    return { count: 0 }
  },
  getters: {
    doubleCount: (state: S) => state.count * 2
  },
  actions: {
    increment(): void {
      this.count++
    }
  }
})
