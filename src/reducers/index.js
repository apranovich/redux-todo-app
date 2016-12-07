import { combineReducers } from 'redux'

import { todos } from './todos'
import { visibilityFilter } from './visibilityFilter'

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
  todos,
  visibilityFilter
});