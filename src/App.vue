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
      <footer class="mt-16 md:mt-32 flex-none mx-auto w-full">
        <div class="flex flex-col items-center justify-between">
          <p class="text-sm text-zinc-400 dark:text-zinc-500">
            Created By:
            <a
              class="font-bold underline decoration-wavy decoration-cyan-400"
              href="https://brunomiguelbarrospinto.dev"
              >Bruno Miguel Barros Pinto.</a
            >
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import HPLogo from '@/components/common/HPLogo.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>
