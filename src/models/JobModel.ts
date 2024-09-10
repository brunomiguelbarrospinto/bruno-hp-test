export type TaskDTO = {
  taskId: string
  taskName: string
}

export type JobDTO = {
  jobId: string
  tasks: TaskDTO[]
}

export class TaskModel {
  readonly taskId
  readonly taskName

  constructor(TaskDTO: TaskDTO) {
    this.taskId = TaskDTO.taskId
    this.taskName = TaskDTO.taskName
  }
}

export class JobModel {
  readonly jobId
  readonly tasks
  readonly color

  constructor(JobDTO: JobDTO) {
    this.jobId = JobDTO.jobId
    this.tasks = JobDTO.tasks.map((t) => new TaskModel(t))
    this.color = 'yellow'
  }
}
