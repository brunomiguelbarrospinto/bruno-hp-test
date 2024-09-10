import { HttpResponse, http } from 'msw'

import tasks from '@/data/tasks.json'

export const handlers = [
  http.get('/src/data/tasks.json', () => {
    return HttpResponse.json(tasks)
  })
]
