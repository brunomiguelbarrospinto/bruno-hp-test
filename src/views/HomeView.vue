<template>
  <div>
    <div id="home-view-title">Home view</div>
    <div>{{ jobsStore.isFetching }}</div>

    <div :key="job.jobId" v-for="job in jobsStore.getJobs">
      {{ job.jobId }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJobsStore } from '@/stores/jobs'
const jobsStore = useJobsStore()
jobsStore.fetchJobs()
</script>
