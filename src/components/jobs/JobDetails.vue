<template>
  <div>
    <div class="font-bold text-green-500 text-lg">Selected job information:</div>
    <div><span class="font-bold">Job Id:</span> {{ props.job.jobId }}</div>
    <div class="font-bold">Job tasks:</div>
    <ul class="list-disc ml-10">
      <li :key="'li-' + task.taskId" v-for="task in props.job.tasks">
        {{ task.taskName }}: {{ task.taskId }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { JobModel } from '@/models/JobModel'

interface Props {
  job: JobModel
}

const props = defineProps<Props>()
</script>
