import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, deleteTodo } from '../store/toDoSlice';
import './custom.css';

function ToDoLayout() {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch(add(inputValue));
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-white mb-6">To do app</h1>
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a Todo..."
            className="flex-grow p-2 rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addTodo}
            className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition duration-300 focus:outline-none"
          >
            Add Todo
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Todos</h2>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-700 text-white p-2 mb-2 rounded-lg">
                {todo}
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="text-red-600 hover:text-red-800 transition duration-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoLayout;