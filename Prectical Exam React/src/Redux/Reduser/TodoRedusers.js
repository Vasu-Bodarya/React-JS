// In your reducer/todoReducer.js
const initialState = {
  TodoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        TodoList: [...state.TodoList, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        TodoList: state.TodoList.filter(todo => todo.id !== action.payload),
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        TodoList: state.TodoList.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case 'VIEW_TODO':
      return {
        ...state,
        TodoList: action.payload, // This will update the TodoList with the fetched todos
      };
    default:
      return state;
  }
};

export default todoReducer;
