import { FormEvent, useMemo, useState } from 'react'

type TaskInputProps = {
  onAdd: (title: string) => void
}

export default function TaskInput({ onAdd }: TaskInputProps) {
  const [title, setTitle] = useState('')

  const isDisabled = useMemo(() => title.trim().length === 0, [title])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!title.trim()) return
    onAdd(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="text-sm font-medium text-slate-700">New task</label>
      <div className="flex gap-2">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        <button
          type="submit"
          disabled={isDisabled}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add
        </button>
      </div>
    </form>
  )
}
