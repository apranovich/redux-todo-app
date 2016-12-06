export const addNewTodo = (id, text) => {
  return {
    type: 'ADD_NEW_TODO',
    payload: { id, text }
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: { id }
  }
}

export const editTodo = (id, text) => {
  return {
    type: 'EDIT_TODO',
    payload: { id, text }
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: { id }
  }
}