import { HttpResponse, http } from 'msw'

import jobs from '../../public/data/jobs.json'

export const handlers = [
  http.get('/data/jobs.json', () => {
    return HttpResponse.json(jobs)
  })
]
