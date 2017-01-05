import { combineReducers } from 'redux'
import todo from './todo'

const byId = (state = {}, action) => {
  switch(action.type){
    case 'ADD_NEW_TODO':
    case 'TOGGLE_TODO': {
      const { id } = action.payload;
      return {
        ...state,
        [id]: todo(state[id], action)
      }
    }
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch(action.type){
    case 'ADD_NEW_TODO': {
      return [...state, action.payload.id]
    }
    default: 
      return state
  }
}

const todos = combineReducers({
  byId, 
  allIds
})

export default todos;

const getAllTodos = (state) => 
  state.allIds.map((id) => state.byId[id])

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch(filter){
    case 'all': {
      return allTodos;
    }
    case 'active': {
      return allTodos.filter( todo => !todo.completed );
    }
    case 'completed': {
      return allTodos.filter( todo => todo.completed );
    }
    default: 
      return allTodos;
  }
}