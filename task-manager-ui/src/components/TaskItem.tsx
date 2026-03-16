import type { Task } from '../types'

type TaskItemProps = {
  task: Task
}

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div>
        <p className="text-sm font-medium text-slate-900">{task.title}</p>
        {task.completed ? (
          <p className="text-xs text-green-600">Completed</p>
        ) : (
          <p className="text-xs text-slate-500">Pending</p>
        )}
      </div>
    </div>
  )
}
