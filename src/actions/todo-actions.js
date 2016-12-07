const addNewTodo = (id, text) => {
  return {
    type: 'ADD_NEW_TODO',
    payload: { id, text }
  }
}

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: { id }
  }
}

const editTodo = (id, text) => {
  return {
    type: 'EDIT_TODO',
    payload: { id, text }
  }
}

const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: { id }
  }
}

export {
  addNewTodo, toggleTodo, editTodo, removeTodo
}