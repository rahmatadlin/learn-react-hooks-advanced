import React, { useState, useEffect } from 'react';
import Todos from '../components/Todos';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const handleIncrement = () => {
    setCount((previousState) => previousState + 1);
  };

  const handleDecrement = () => {
    setCount2((previousState) => previousState - 1);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-2xl font-bold mb-4 text-center">useEffect Hook</div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center mb-4">
        <div className="mb-4">
          <button
            onClick={handleDecrement}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Decrement
          </button>
        </div>
        <div className="text-lg mb-2">Count 1: <span className="font-semibold">{count}</span></div>
        <div className="text-lg mb-2">Count 2: <span className="font-semibold">{count2}</span></div>
        <div>
          <button
            onClick={handleIncrement}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Increment
          </button>
        </div>
      </div>
      <div className="space-y-2">
        {todos.map((todo) => (
          <Todos key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
