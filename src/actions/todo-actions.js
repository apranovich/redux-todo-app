import * as api from '../api'

const addNewTodo = (id, text) => ({
  type: 'ADD_NEW_TODO',
  payload: { id, text }
})

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: { id }
})

const receiveTodos = (filter, data) => ({
  type: 'RECEIVE_TODOS',
  payload: { filter, data }
})

const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  );

const editTodo = (id, text) => ({
  type: 'EDIT_TODO',
  payload: { id, text }
})

const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: { id }
})

export {
  addNewTodo, toggleTodo, fetchTodos, editTodo, removeTodo
}