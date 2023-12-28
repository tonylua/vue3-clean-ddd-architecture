import { defineStore as definePinia, createPinia } from 'pinia'
import type { ICreateStore, IDefineStore } from '@infra/types/store'

export const defineStore: IDefineStore = definePinia

export const createStore: ICreateStore = createPinia
