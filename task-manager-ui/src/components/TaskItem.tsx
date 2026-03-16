import type { Task } from '../types'

type TaskItemProps = {
  task: Task
  onDelete?: (taskId: string) => void
  onToggle?: (taskId: string) => void
}

export default function TaskItem({ task, onDelete, onToggle }: TaskItemProps) {
  const handleDelete = () => {
    if (!onDelete) return
    onDelete(task.id)
  }

  const handleToggle = () => {
    if (!onToggle) return
    onToggle(task.id)
  }

  return (
    <div className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={handleToggle}
          className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-50"
          type="button"
          aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
          title={task.completed ? 'Mark incomplete' : 'Mark complete'}
        >
          {task.completed ? '✓' : '○'}
        </button>

        <div>
          <p
            className={`text-sm font-medium ${
              task.completed ? 'text-slate-400 line-through' : 'text-slate-900'
            }`}
          >
            {task.title}
          </p>
          {task.completed ? (
            <p className="text-xs text-green-600">Completed</p>
          ) : (
            <p className="text-xs text-slate-500">Pending</p>
          )}
        </div>
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
