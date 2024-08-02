/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/Slice/todoSlice.js';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-row gap-6 items-center justify-center'>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => dispatch(toggleTodo(todo.id))}
        className='text-xl'
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))} className='bg-red-950 text-white p-1 rounded-xl'>Delete</button>
    </div>
  );
};

export default TodoItem;
