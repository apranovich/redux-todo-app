import React, { Component } from 'react'
import { addNewTodo, toggleTodo, editTodo, removeTodo, setVisibilityFilter } from '../actions/index'

export class TodoApp extends Component {
  constructor(props){
    super(props);

    let todos = this.props.todos;
    this.nextTodoId = todos.length ? todos[todos.length - 1].id : 0;
  }

  render(){
    return (
      <div>
        <input type="text" ref={ (input) => { this.input = input } }/>
        <button onClick={() => {
          this.props.store.dispatch(addNewTodo(++this.nextTodoId, this.input.value));
          this.input.value = '';
        }}>
          Add new Todo
        </button>

        <ul>
          {this.props.todos.map((todo) => 
            <li key={todo.id} 
                onClick={() => {this.props.store.dispatch(toggleTodo(todo.id))}}
                style={ {textDecoration: todo.completed ? 'line-through' : 'none'} }>
              { todo.text }
            </li> 
          )}
        </ul>
      </div>
    )
  }
}