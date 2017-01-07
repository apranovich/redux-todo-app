import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { withRouter } from 'react-router'
import { getVisibleTodos } from '../reducers/index'

import { FilterLink } from './FilterLink'
import { TodoList } from './TodoList'
import { AddTodo } from './AddTodo'
import { Footer } from './Footer'
import { fetchTodos } from '../api'

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { filter } = this.props;
    this.fetchData(filter);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.filter !== nextProps.filter){
      this.fetchData(nextProps.filter);
    }
  }

  fetchData(filter){
    fetchTodos(filter).then((todos) => {
      console.log(todos);
      this.props.receiveTodos(filter, todos);
    });
  }

  render(){
    const { toggleTodo, ...rest } = this.props;
    return (
      <div>
        <AddTodo {...rest}/>        
        <TodoList {...rest} onTodoClick={this.props.toggleTodo}/>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state, {params}) => {
  const filter = params.filter || "all";
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

export default withRouter(
  connect(
    mapStateToProps, 
    actions
  )(App)
);