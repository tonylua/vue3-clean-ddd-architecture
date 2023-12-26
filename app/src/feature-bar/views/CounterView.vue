<template>
  <div>
    <h1>count = {{ counterStore?.count }}</h1>
    <h1>count✖️2 = {{ counterStore?.doubleCount }}</h1>
    <button @click="counterStore?.increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { injectCounterStore } from '@/common/utils/pinia'

const useCounterStore = injectCounterStore()

const counterStore = useCounterStore?.()
</script>
