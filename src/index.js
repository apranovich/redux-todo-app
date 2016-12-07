import 'babel-polyfill';

import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { rootReducer } from './reducers/index'
import { addNewTodo, toggleTodo, editTodo, removeTodo, setVisibilityFilter } from './actions/index'
import { TodoApp } from './components/TodoApp'

const store = createStore(rootReducer);

const renderApp = () => { 
  render(
    <TodoApp todos={store.getState().todos} store={store}/>,
    document.getElementById('root')
  )
}

store.subscribe(renderApp);
renderApp();