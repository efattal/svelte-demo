import { writable } from 'svelte/store'
import { nanoid } from 'nanoid/non-secure'

export const todos = writable([])

const createTodo = (description) => ({ description, id: nanoid(10) })

export const loadTodos = async () => {
  const data = await (await fetch('/todos.json')).json()
  todos.set(data.map(createTodo))
}

export const addTodo = (description) => {
  if (description) {
    todos.update((arr) => [...arr, createTodo(description)])
  }
}

export const removeTodo = (todo) =>
  todos.update((arr) => arr.filter((it) => it != todo))

export const toggleTodo = (todo, done) =>
  todos.update((arr) =>
    Object.assign([], arr, { [arr.indexOf(todo)]: { ...todo, done } }),
  )
