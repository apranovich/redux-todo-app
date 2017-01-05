const fakeDatabase = {
  todos: [
    { id: 0, completed: false, text: 'First task' },
    { id: 0, completed: true, text: 'Second task' },
    { id: 0, completed: false, text: 'Third task' },
  ]
}

const delay = (ms) => 
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = (filter) => {
  return delay(500).then(() => {
    switch(filter){
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter((todo) => !todo.completed);
      case 'completed':
        return fakeDatabase.todos.filter((todo) => todo.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  })
} 