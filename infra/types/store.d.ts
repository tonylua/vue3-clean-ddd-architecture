import type { StateTree, _GettersTree, DefineStoreOptions, StoreDefinition, Pinia } from 'pinia'

export type IDefineStore = <
  Id extends string = string,
  S extends StateTree = {},
  G extends _GettersTree<S> = {},
  A = {}
>(
  id: Id,
  options: Omit<DefineStoreOptions<Id, S, G, A>, 'id'>
) => StoreDefinition<Id, S, G, A>

export type ICreateStore = () => Pinia
