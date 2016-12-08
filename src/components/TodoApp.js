import React, { Component } from 'react'
import { addNewTodo, toggleTodo, editTodo, removeTodo, setVisibilityFilter } from '../actions/index'

import { FilterLink } from './FilterLink'
import { TodoList } from './TodoList'
import { AddTodo } from './AddTodo'

export class TodoApp extends Component {
  constructor(props){
    super(props);

    this.lastUsedTodoId = this.props.todos.length ? this.props.todos[this.props.todos.length - 1].id : 0;
    this.clickedFilter = 'SHOW_ALL';
  }

  filterTodos(filter){
    this.props.dispatch(setVisibilityFilter(filter));
  }

  visibleTodos(){
    let todos = this.props.todos;
    switch(this.props.visibilityFilter){
      case 'SHOW_ALL': {
        return todos;
      }
      case 'SHOW_ACTIVE': {
        return todos.filter( todo => !todo.completed );
      }
      case 'SHOW_COMPLETED': {
        return todos.filter( todo => todo.completed );
      }
    }
  }

  render(){
    return (
      <div>
        <AddTodo addNewTodo={ (id, text) => this.props.dispatch(addNewTodo(id, text)) } nextTodoId={++this.lastUsedTodoId}/>        
        <TodoList todos={ this.visibleTodos() } onTodoClick={ (id) => this.props.dispatch(toggleTodo(id)) }/>
        
        <p>Show:{' '}
          <FilterLink onClick={() => this.filterTodos('SHOW_ALL')} isSelected={this.props.visibilityFilter === 'SHOW_ALL'}>All</FilterLink>{' '}
          <FilterLink onClick={() => this.filterTodos('SHOW_ACTIVE')} isSelected={this.props.visibilityFilter === 'SHOW_ACTIVE'}>Active</FilterLink>{' '}
          <FilterLink onClick={() => this.filterTodos('SHOW_COMPLETED')} isSelected={this.props.visibilityFilter === 'SHOW_COMPLETED'}>Completed</FilterLink>
        </p>
      </div>
    )
  }
}