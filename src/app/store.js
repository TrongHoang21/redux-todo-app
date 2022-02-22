import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice' //export default do it a' m

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
});
