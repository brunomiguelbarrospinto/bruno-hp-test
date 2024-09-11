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
  readonly hasToBePrint
  private hasToBeLaminate
  public printPosition: number
  public laminatePosition: number

  constructor(JobDTO: JobDTO) {
    this.jobId = JobDTO.jobId
    this.tasks = JobDTO.tasks.map((t) => new TaskModel(t))
    this.hasToBePrint = this.tasks.some((t) => t.taskName === 'Print')
    this.hasToBeLaminate = this.tasks.some((t) => t.taskName === 'Laminate')
    this.color = 'yellow'
    this.printPosition = 0
    this.laminatePosition = 0
  }
  setPrintPosition(position: number) {
    this.printPosition = position
  }
  setLaminatePosition(position: number) {
    this.laminatePosition = position
  }
}
