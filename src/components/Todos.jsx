import React from 'react';

const Todos = ({ todo }) => {
  return (
    <div
      className={`p-4 text-white mb-4 rounded-lg  ${
        todo.completed ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {todo.title}
    </div>
  );
};

export default Todos;
