import { combineReducers } from 'redux'
import todos, * as fromTodos from './todos'

const combineReducersFromScratch = (reducers) => {
  return (state = {}, action) => {

    return Object.keys(reducers).reduce(
      (previousState, currentKey) => {
        previousState[currentKey] = reducers[currentKey](state[currentKey], action);
        return previousState;
      }, {}
    );

  }
}

export const rootReducer = combineReducers({
  todos
});

export const getVisibleTodos = (state, filter) => 
  fromTodos.getVisibleTodos(state.todos, filter)