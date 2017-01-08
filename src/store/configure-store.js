import { createStore, combineReducers, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers/index'
import createLogger from 'redux-logger'
import promise from 'redux-promise'

const middlwares = [createLogger(), promise];
const store = createStore(rootReducer, applyMiddleware(...middlwares));

export default store;