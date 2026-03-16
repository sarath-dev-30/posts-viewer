import { useMemo } from 'react'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import { useTasks } from '../hooks/useTasks'

export default function HomePage() {
  const { tasks, addTask } = useTasks()
  const taskCountLabel = useMemo(() => {
    if (tasks.length === 0) return 'No tasks yet'
    if (tasks.length === 1) return '1 task'
    return `${tasks.length} tasks`
  }, [tasks.length])

  return (
    <main className="mx-auto max-w-3xl p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">Task Manager</h1>
        <p className="mt-2 text-slate-600">Create tasks, track progress, and stay organized.</p>
      </header>

      <section className="space-y-6">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Add a task</h2>
            <span className="text-sm text-slate-500">{taskCountLabel}</span>
          </div>
          <TaskInput onAdd={addTask} />
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Tasks</h2>
          <TaskList tasks={tasks} />
        </div>
      </section>
    </main>
  )
}
