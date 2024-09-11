import { type JobDTO, JobModel } from './JobModel'

import { describe, expect, it } from 'vitest'

describe('JobModel', () => {
  it('test create new model and verify attributes', async () => {
    const jobMockDTO: JobDTO = {
      jobId: 'qwerty',
      tasks: [
        {
          taskId: 'qwerty-a',
          taskName: 'Qwerty-A'
        }
      ]
    }

    const jobInstance = new JobModel(jobMockDTO)

    await expect(jobInstance.jobId).toBe(jobMockDTO.jobId)
    await expect(jobInstance.tasks[0].taskId).toBe(jobMockDTO.tasks[0].taskId)

    const PRINT_POSITION = 3
    jobInstance.setPrintPosition(PRINT_POSITION)
    await expect(jobInstance.printPosition).toBe(PRINT_POSITION)

    const LAMINATE_POSITION = 5
    jobInstance.setLaminatePosition(LAMINATE_POSITION)
    await expect(jobInstance.laminatePosition).toBe(LAMINATE_POSITION)
  })
})
