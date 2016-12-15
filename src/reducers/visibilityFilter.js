export const visibilityFilter = (state = 'all', action) => {
  switch(action.type){
    case 'SET_VISIBILITY_FILTER': 
      return action.payload.filter;
    default:
      return state;
  }
}
