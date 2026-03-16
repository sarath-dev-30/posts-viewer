import type { Task } from '../types'

type TaskItemProps = {
  task: Task
  onDelete?: (taskId: string) => void
}

export default function TaskItem({ task, onDelete }: TaskItemProps) {
  const handleDelete = () => {
    if (!onDelete) return
    onDelete(task.id)
  }

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

      <button
        onClick={handleDelete}
        className="rounded-md bg-rose-600 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-500"
        type="button"
      >
        Delete
      </button>
    </div>
  )
}
