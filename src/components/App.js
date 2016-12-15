import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewTodo, toggleTodo, editTodo, removeTodo, setVisibilityFilter } from '../actions/index'
import { withRouter } from 'react-router'
import { getVisibleTodos } from '../reducers/index'

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

  render(){
    const { todos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo addNewTodo={this.props.addNewTodo} nextTodoId={++this.lastUsedTodoId}/>        
        <TodoList todos={todos} onTodoClick={this.props.toggleTodo}/>
        <Footer onFilterClick={this.props.setFilter} currentFilter={visibilityFilter}/>
      </div>
    )
  }
}

const mapStateToProps = (state, {params}) => {
  return {
    todos: getVisibleTodos(state, params.filter || "all"),
    visibilityFilter: params.filter || "all"
  }
}

export default withRouter(
  connect(
    mapStateToProps, 
    { addNewTodo, setFilter: setVisibilityFilter, toggleTodo }
  )(App)
);