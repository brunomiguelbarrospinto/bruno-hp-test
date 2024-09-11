<template>
  <div>
    <div id="home-view-title">Home view</div>
    <div v-if="jobsStore.isFetching">
      <IconLoading class="mx-auto" />
    </div>
    <div v-else>
      <div class="overflow-x-auto">
        <div class="flex">
          <div class="hours"></div>
          <div class="hours" v-for="hour in hours" :key="'div-' + hour">{{ hour }}</div>
        </div>
        <div
          class="flex"
          v-for="(job, machine) in jobsStore.getJobsByMachineAndHours"
          :key="'div-' + machine"
        >
          <div class="hours">{{ machine }}</div>
          <div class="hours" v-for="(hour, k) in hours" :key="'div-' + hour">
            {{ job[k]?.taskId }}
          </div>
        </div>
      </div>
    </div>
    <pre>{{ jobsStore.getJobsByMachineAndHours }}</pre>
  </div>
</template>

<script setup lang="ts">
import IconLoading from '@/components/common/IconLoading.vue'
import { useJobsStore } from '@/stores/jobs'
const jobsStore = useJobsStore()
jobsStore.fetchJobs()
const hours = jobsStore.getHours
</script>

<style lang="scss">
.hours {
  @apply min-w-32 h-10;
}
</style>
