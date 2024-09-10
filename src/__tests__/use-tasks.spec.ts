import '@/mocks/node'

import { describe, expect, it } from 'vitest'

import tasks from '@/data/tasks.json'
import useTasks from '@/composables/useTasks'
import { waitFor } from '@testing-library/vue'

describe('Use Tasks', () => {
  it('get tasks from composable', async () => {
    const { execute, data, isFetching } = useTasks()
    execute()
    await waitFor(async () => {
      await expect(isFetching.value).toBe(false)
      await expect(data.value).equal(JSON.stringify(tasks))
    })
  })
})
