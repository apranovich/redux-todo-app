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

export default todo;