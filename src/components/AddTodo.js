import React from 'react'

export const AddTodo = ({addNewTodo, nextTodoId}) => { 
  let input;
  return (
    <div>
      <input type="text" ref={ (node) => { input = node } }/>
      <button onClick={() => { 
        addNewTodo(nextTodoId, input.value);
        input.value = '';
      }}>
        Add new Todo
      </button>
    </div>
  )
}