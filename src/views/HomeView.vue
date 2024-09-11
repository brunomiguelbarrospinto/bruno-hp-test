<template>
  <div>
    <div id="home-view-title" class="text-xl text-hp font-bold">Home view</div>
    <div v-if="jobsStore.isFetching">
      <IconLoading class="mx-auto" />
    </div>
    <div v-else>
      <div class="jobs">
        <div class="flex">
          <div class="machine"></div>
          <div class="hours" v-for="hour in hours" :key="'div-' + hour">{{ hour }}</div>
        </div>
        <div
          class="machine-tasks"
          v-for="(job, machine) in jobsStore.getJobsByMachineAndHours"
          :key="'div-' + machine"
        >
          <div class="machine">{{ machine }}</div>
          <div
            class="task"
            :data-job-id="job[k] ? job[k].jobId : undefined"
            v-for="(hour, k) in hours"
            :key="'div-' + hour"
            @click="selectTask"
          >
            {{ job[k]?.taskId }}
          </div>
        </div>
      </div>
    </div>
    <hr class="my-3" />
    <div v-if="!selectedJob">
      <div class="font-bold text-orange-500 text-lg">Please select a task from table</div>
    </div>
    <JobDetails v-if="selectedJob" :job="selectedJob" />
    <hr class="my-3" />
    <pre>{{ jobsStore.getJobsByMachineAndHours }}</pre>
  </div>
</template>

<script setup lang="ts">
import IconLoading from '@/components/common/IconLoading.vue'
import JobDetails from '@/components/jobs/JobDetails.vue'
import { useJobsStore } from '@/stores/jobs'
import { ref, computed } from 'vue'
const jobsStore = useJobsStore()
jobsStore.fetchJobs()
const hours = jobsStore.getHours

const selectedJobId = ref('')

const selectedJob = computed(() => jobsStore.getJob(selectedJobId.value))

function selectTask(event: Event) {
  document
    .querySelectorAll('.job-selected')
    .forEach((element) => element.classList.remove('job-selected'))

  const element = event.target as HTMLElement
  const JobId = element.getAttribute('data-job-id') as string
  selectedJobId.value = JobId
  document.querySelectorAll(`[data-job-id=${JobId}]`).forEach((element) => {
    element.classList.add('job-selected')
  })
}
</script>

<style lang="scss">
.jobs {
  @apply overflow-y-auto;
}
.hours {
  @apply min-w-32 h-10;
}
.machine-tasks {
  @apply flex;
}
.machine {
  @apply min-w-32 h-10 absolute bg-white;
}

.task {
  @apply min-w-32 h-10 cursor-pointer;
}

.machine + .hours {
  @apply ml-32;
}
.machine + .task {
  @apply ml-32;
}
.job-selected {
  @apply bg-green-500;
}
</style>
