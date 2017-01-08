import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch(action.type){
    case 'RECEIVE_TODOS': {
      const nextState = {...state};
      action.payload.data.forEach((todo) => {
        nextState[todo.id] = todo;
      });
      return nextState;
    }
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  if(action.payload && action.payload.filter !== 'all'){
    return state;
  }
  switch(action.type){
    case 'RECEIVE_TODOS': {
      return action.payload.data.map(todo => todo.id);
    }
    default: 
      return state
  }
}

const activeIds = (state = [], action) => {
  if(action.payload && action.payload.filter !== 'active'){
    return state;
  }
  switch(action.type){
    case 'RECEIVE_TODOS': {
      return action.payload.data.map(todo => todo.id);
    }
    default: 
      return state
  }
}

const completedIds = (state = [], action) => {
  if(action.payload && action.payload.filter !== 'completed'){
    return state;
  }
  switch(action.type){
    case 'RECEIVE_TODOS': {
      return action.payload.data.map(todo => todo.id);
    }
    default: 
      return state
  }
}

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds
})

const todos = combineReducers({
  byId, 
  idsByFilter
})

export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
}