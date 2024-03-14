import { DELETE_TODO, TOGGLE_TODO_CHECKED, ADD_TODO } from './constant';
import { todolist } from '../../../common/data/Project/todolist';

const initialState = {
  todoList: todolist,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      const updatedTodoList = state.todoList.filter(todo => todo.id !== action.payload);
      return {
        ...state,
        todoList: updatedTodoList,
      };
    case TOGGLE_TODO_CHECKED:
      return {
        ...state,
        todoList: state.todoList.map(todo =>
          todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
        )
      };
    case ADD_TODO:
      const newTodoList = [...state.todoList, action.payload];
      return {
        ...state,
        todoList: newTodoList,
      };
    default:
      return state;
  }
};

export default todoReducer;
