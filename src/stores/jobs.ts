import { JobModel, type JobDTO } from '@/models/JobModel'
import { defineStore } from 'pinia'
import useJobs from '@/composables/useJobs'
const { execute, data, isFetching } = useJobs()

interface JobsState {
  jobs: null | JobModel[]
}

export const useJobsStore = defineStore('jobs', {
  state: (): JobsState => ({ jobs: null }),
  getters: {
    getJobs: (state) => state.jobs,
    isFetching: () => isFetching.value
  },
  actions: {
    async fetchJobs() {
      await execute()
      if (data.value) {
        this.jobs = data.value.map((j: JobDTO) => new JobModel(j))
      }
    }
  }
})
