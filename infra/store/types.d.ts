/*********** type utils ***********/

type ExtractFromDefine<T, K extends keyof T> = {
  [P in K]: T[K]
}

type ExtractActions<T> = ExtractFromDefine<T, 'Actions'>

type ComputeGetterValues<T> = {
  [P in keyof T['Getters']]: ReturnType<T['Getters'][P]>
}

type MergeStateAndGetters<T> = {
  [P in keyof T['State']]: T['State'][P]
} & {
  [P in keyof ComputeGetterValues<T>]: ComputeGetterValues<T>[P]
}

type StoreRecord = Record<string | number | symbol, any>

export interface IPiniaStoreDefine {
  State: StoreRecord
  Getters: Record<string, (state: StoreRecord) => any>
  Actions: Record<string, () => void>
}

export type IPiniaStore<T extends IPiniaStoreDefine> = MergeStateAndGetters<T> & ExtractActions<T>
