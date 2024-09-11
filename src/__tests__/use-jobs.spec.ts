import '@/mocks/node'

import { describe, expect, it } from 'vitest'

import jobs from '../../public/data/jobs.json'
import useJobs from '@/composables/useJobs'
import { waitFor } from '@testing-library/vue'

describe('Use Jobs composable', () => {
  it('get jobs from composable', async () => {
    const { execute, data, isFetching } = useJobs()
    execute()
    await waitFor(async () => {
      await expect(isFetching.value).toBe(false)
      await expect(JSON.stringify(data.value)).equal(JSON.stringify(jobs))
    })
  })
})
