<template>
  <div>
    <div id="home-view-title">Home view</div>
    {{ isFetching }}
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import useTasks from '@/composables/useTasks'
const { execute, data, isFetching } = useTasks()
execute()
</script>
