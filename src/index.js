import 'babel-polyfill';

import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { rootReducer } from './reducers/index'
import { addNewTodo, toggleTodo, editTodo, removeTodo } from './actions/index'

const store = createStore(rootReducer);

console.log(store.getState());

store.dispatch(addNewTodo(4, 'Go to sleep'));
console.log(store.getState());

store.dispatch(toggleTodo(4));
console.log(store.getState());

store.dispatch(removeTodo(4));
console.log(store.getState());