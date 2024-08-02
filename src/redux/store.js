import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Slice/todoSlice.js';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;