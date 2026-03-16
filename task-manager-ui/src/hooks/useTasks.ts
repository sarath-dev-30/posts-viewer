import { useCallback, useReducer } from 'react'
import type { Task } from '../types'

type Action =
  | { type: 'add'; payload: { title: string } }
  | { type: 'delete'; payload: { id: string } }
  | { type: 'toggle'; payload: { id: string } }

function tasksReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'add': {
      const newTask: Task = {
        id: crypto.randomUUID(),
        title: action.payload.title.trim(),
        completed: false,
      }
      return [newTask, ...state]
    }
    case 'delete':
      return state.filter(task => task.id !== action.payload.id)
    case 'toggle':
      return state.map(task =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task,
      )
    default:
      return state
  }
}

export function useTasks(initialTasks: Task[] = []) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  const addTask = useCallback((title: string) => {
    if (!title.trim()) return
    dispatch({ type: 'add', payload: { title } })
  }, [])

  const deleteTask = useCallback((id: string) => {
    dispatch({ type: 'delete', payload: { id } })
  }, [])

  const toggleTaskComplete = useCallback((id: string) => {
    dispatch({ type: 'toggle', payload: { id } })
  }, [])

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTaskComplete,
  }
}
