/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/Slice/todoSlice.js';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-row gap-4'>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className='border-2 border-gray-600 rounded-lg p-2'
      />
      <button type="submit" className='bg-blue-950 text-white pl-3 pr-3 pt-1 pb-1 rounded-xl'>Add</button>
    </form>
  );
};

export default TodoForm;
