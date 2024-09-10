import { useFetch } from '@vueuse/core'

const { isFetching, error, data, execute } = useFetch('/data/jobs.json', {
  immediate: false
}).json()

function useJobs() {
  return {
    data,
    isFetching,
    error,
    execute
  }
}

export default useJobs
