import { defineStore, type IStoreDefine } from '@/common/utils/pinia'

interface ICounterDefine extends IStoreDefine {}

export const useCounterStore = defineStore<ICounterDefine>('counter', {
  state: () => {
    return { count: 0 }
  },
  getters: {
    doubleCount: (state: ICounterDefine['State']) => state.count * 2
  },
  actions: {
    increment(): void {
      this.count++
    }
  }
})
