import React, { useState, useReducer } from 'react';
import { reducer } from '../reducer/reducer';
import { ACTION } from '../reducer/actionType';

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: ACTION.INCREMENT, payload: 20 });
  };

  const handleDecrement = () => {
    dispatch({ type: ACTION.DECREMENT });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-2xl font-bold mb-4 text-center">useReducer Hook</div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <div className="mb-4 text-lg">Current Count: <span className="font-semibold">{state.count}</span></div>
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

export default UseReducer;
