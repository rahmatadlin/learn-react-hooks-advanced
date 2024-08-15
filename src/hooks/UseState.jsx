import React, { useState } from 'react';

const UseState = () => {
  const [state, setState] = useState({ count: 0, name: "Coba useState" });
  const { count, name } = state;

  const handleIncrement = () => {
    setState(previousState => {
      return { ...previousState, count: previousState.count + 1 };
    });
  };

  const handleDecrement = () => {
    setState(previousState => {
      return { ...previousState, count: previousState.count - 1 };
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-2xl font-bold mb-4 text-center">useState Hook</div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <div className="mb-4 text-lg">Current Count: <span className="font-semibold">{count}</span></div>
        <div className="mb-4 text-lg">Name: <span className="font-semibold">{name}</span></div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleDecrement}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Decrement
          </button>
          <button
            onClick={handleIncrement}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
