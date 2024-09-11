<template>
  <div class="bg-zinc-50 min-h-screen">
    <div class="max-w-6xl m-auto bg-white min-h-screen p-8 md:p-20 lg:p-24">
      <header class="flex items-center">
        <HPLogo />
        <RouterLink class="ml-3" to="/">Home</RouterLink>
        <RouterLink class="ml-3" to="/another">Another</RouterLink>
      </header>
      <hr class="my-3" />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import HPLogo from '@/components/common/HPLogo.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>
