import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_CHECKED } from './constant';

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});



export const toggleTodoChecked = (itemId) => ({
    type: TOGGLE_TODO_CHECKED,
    payload: itemId,
  });


  export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});  