import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      { todos.map((todo) => <TodoItem key={todo.id} {...todo} onTodoClick={ (id) => onTodoClick(id) } />) }
    </ul>
  )
}