import React from 'react'

export const AddTodo = ({todos, addNewTodo}) => { 
  let input;
  const newTodoId = todos.length ? todos[todos.length - 1].id + 1 : 0;
  const addTodo = (value) => {
    addNewTodo(newTodoId, value);
    input.value = '';
  }

  return (
    <div>
      <input 
        type="text" 
        ref={ (node) => { input = node } } 
        onKeyPress={(e) => {
          if (e.key === 'Enter')
            addTodo(input.value)
        }}/>
      <button onClick={() => addTodo(input.value)}>
        Add new Todo
      </button>
    </div>
  )
}