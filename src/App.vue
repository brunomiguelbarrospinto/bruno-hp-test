<template>
  <header>
    <HPLogo />
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import HPLogo from '@/components/common/HPLogo.vue'
import { RouterView } from 'vue-router'
</script>
