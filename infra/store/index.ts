import { defineStore as piniaDefineStore, type DefineStoreOptions } from 'pinia'
import type { IPiniaStoreDefine, IPiniaStore } from './types'

export type IStoreDefine = IPiniaStoreDefine

export type IStoreInstance<T extends IStoreDefine> = IPiniaStore<T>

export const defineStore = <T extends IStoreDefine>(
  id: string,
  options: Omit<DefineStoreOptions<string, T['State'], T['Getters'], T['Actions']>, 'id'>
) => piniaDefineStore(id, options)
