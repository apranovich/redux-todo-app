const initialState = [
  { id: 1, text: 'Buy Iphone 6+', completed: false },
  { id: 2, text: 'Complete medical examination', completed: false },
  { id: 3, text: 'Find new appartments to rent', completed: false }
];

const todo = (state = {}, action) => {
  const { payload } = action;

  switch(action.type){
    case 'ADD_NEW_TODO': {
      return {
        id: payload.id,
        text: payload.text,
        completed: false
      }
    }
    case 'TOGGLE_TODO': {
      if(state.id !== payload.id){
        return state;
      }
      return Object.assign({}, state, {completed: !state.completed})
    }
    case 'EDIT_TODO': {
      if(state.id !== payload.id){
        return state;
      }
      return { ...state, text: payload.text }
    }    
    case 'REMOVE_TODO': {
      return state.id !== payload.id;
    }
    default:
      return state;
  }
}

const todos = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_NEW_TODO': {
      return [
        ...state,
        todo(undefined, action)
      ]
    }
    case 'TOGGLE_TODO':
    case 'EDIT_TODO': {
      return state.map( (item) => todo(item, action) );
    }
    case 'REMOVE_TODO': {
      return state.filter( (item) => todo(item, action) );
    }    
    default:
      return state;
  }
}

export default todos;

export const getVisibleTodos = (state, filter) => {
  switch(filter){
    case 'all': {
      return state;
    }
    case 'active': {
      return state.filter( todo => !todo.completed );
    }
    case 'completed': {
      return state.filter( todo => todo.completed );
    }
    default: 
      return state;
  }
}