import { useFetch } from '@vueuse/core'

const { isFetching, error, data, execute } = useFetch('/data/tasks.json', {
  immediate: false
})

function useTasks() {
  return {
    data,
    isFetching,
    error,
    execute
  }
}

export default useTasks
