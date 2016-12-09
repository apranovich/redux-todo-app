import 'babel-polyfill';

import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'  

import { rootReducer } from './reducers/index'
import { addNewTodo, toggleTodo, editTodo, removeTodo, setVisibilityFilter } from './actions/index'
import TodoApp from './components/TodoApp'

const store = createStore(rootReducer);

const renderApp = () => { 
  render(
    <Provider store={store}>
      <TodoApp/>
    </Provider>,
    document.getElementById('root')
  )
}

store.subscribe(renderApp);
renderApp();