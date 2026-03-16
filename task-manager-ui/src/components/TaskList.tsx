import type { Task } from '../types'
import TaskItem from './TaskItem'

type TaskListProps = {
  tasks: Task[]
}

export default function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-slate-200 bg-white p-8 text-center">
        <p className="text-sm text-slate-500">No tasks yet. Add a task to get started.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}
