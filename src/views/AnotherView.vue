<template>
  <div>
    <div>Another view</div>
    <div>Count: {{ counterStore.count }}</div>
    <div>Double count: {{ counterStore.doubleCount }}</div>
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>
