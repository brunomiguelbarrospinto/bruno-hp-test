import { JobModel, type JobDTO } from '@/models/JobModel'
import { defineStore } from 'pinia'
import useJobs from '@/composables/useJobs'
import { ref } from 'vue'
const { execute, data, isFetching } = useJobs()

interface JobsState {
  jobs: null | JobModel[]
  hours: string[]
  machines: string[]
}

export const useJobsStore = defineStore('jobs', {
  state: (): JobsState => ({
    jobs: null,
    hours: [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00'
    ],
    machines: ['Print', 'Laminate', 'Trim']
  }),
  getters: {
    getJobs: (state) => state.jobs,
    getHours: (state) => state.hours,
    getMachines: (state) => state.machines,
    getJobsByMachineAndHours: (state) => {
      const result: any = {}
      const hours: any = {}
      const hoursLength = state.hours.length
      Object.keys(state.hours).forEach((k) => (hours[k] = null))
      Object.keys(state.machines).forEach((k: any) => (result[state.machines[k]] = { ...hours }))

      state.jobs?.forEach((job) => {
        job.tasks.forEach((task) => {
          let i = 0
          if (job.hasToBePrint && task.taskName === 'Laminate') {
            i = job.printPosition + 1
          }
          if (job.laminatePosition && task.taskName === 'Trim') {
            i = job.laminatePosition + 1
          }

          while (i < hoursLength) {
            if (task.taskName === 'Print') {
              if (result['Print'][i] === null) {
                result['Print'][i] = { jobId: job.jobId, ...task }
                job.setPrintPosition(i)
                break
              }
            }

            if (task.taskName === 'Laminate') {
              if (result['Laminate'][i] === null) {
                result['Laminate'][i] = { jobId: job.jobId, ...task }
                job.setLaminatePosition(i)
                break
              }
            }

            if (task.taskName === 'Trim') {
              if (result['Trim'][i] === null) {
                result['Trim'][i] = { jobId: job.jobId, ...task }
                break
              }
            }
            i++
          }
        })
      })

      return result
    },
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
