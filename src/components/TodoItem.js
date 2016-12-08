import React from 'react'

export const TodoItem = ({ id, text, completed, onTodoClick }) => {
  return (
    <li onClick={() => onTodoClick(id)}
        style={ {textDecoration: completed ? 'line-through' : 'none'} }>
      { text }
    </li> 
  )
}