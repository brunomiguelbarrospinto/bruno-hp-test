import { HttpResponse, http } from 'msw'

import tasks from '../../public/data/tasks.json'

export const handlers = [
  http.get('/data/tasks.json', () => {
    return HttpResponse.json(tasks)
  })
]
