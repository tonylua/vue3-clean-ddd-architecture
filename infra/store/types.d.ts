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

interface IPiniaStoreDefine {
  State: Record<string, unknown>
  Getters: Record<string, (state: IPiniaStoreDefine['State']) => unknown>
  Actions: Record<string, () => void>
}

type IPiniaStore<T extends IPiniaStoreDefine> = MergeStateAndGetters<T> & ExtractActions<T>

/*********** business types ***********/

export interface ICounterStoreDefine extends IPiniaStoreDefine {
  State: { count: number }
  Getters: { doubleCount: (state: ICounterStoreDefine['State']) => number }
  Actions: { increment: () => void }
}

export type ICounterStore = IPiniaStore<ICounterStoreDefine>
