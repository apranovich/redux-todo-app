import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewTodo, toggleTodo, editTodo, removeTodo, setVisibilityFilter } from '../actions/index'

import { FilterLink } from './FilterLink'
import { TodoList } from './TodoList'
import { AddTodo } from './AddTodo'
import { Footer } from './Footer'

class App extends Component {
  constructor(props){
    super(props);
    this.lastUsedTodoId = this.getLastUsedIdForTodoItem();
  }

  getLastUsedIdForTodoItem(){
    const { todos } = this.props;
    return todos.length ? todos[todos.length - 1].id : 0
  }

  visibleTodos(todos, visibilityFilter){
    switch(visibilityFilter){
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
    const { todos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo addNewTodo={this.props.addNewTodo} nextTodoId={++this.lastUsedTodoId}/>        
        <TodoList todos={ this.visibleTodos(todos, visibilityFilter) } onTodoClick={this.props.toggleTodo}/>
        <Footer onFilterClick={this.props.setFilter} currentFilter={visibilityFilter}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTodo: (id, text) => { dispatch(addNewTodo(id, text)) },
    setFilter: (filter) => { dispatch(setVisibilityFilter(filter)) },
    toggleTodo: (id) => { dispatch(toggleTodo(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);