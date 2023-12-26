import { defineStore } from 'pinia'
import type { ICounterStoreDefine } from './types'

export const useCounterStore = defineStore<
  string,
  ICounterStoreDefine['State'],
  ICounterStoreDefine['Getters'],
  ICounterStoreDefine['Actions']
>('counter', {
  state: () => {
    return { count: 0 }
  },
  getters: {
    doubleCount(state): number {
      return state.count * 2
    }
  },
  actions: {
    increment(): void {
      this.count++
    }
  }
})
