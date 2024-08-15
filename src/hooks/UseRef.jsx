import React, { useState, useRef } from 'react';

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
    countRef.current++;

    console.log("state : ", count);
    console.log("useRef : ", countRef.current);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-xl font-bold mb-4">useRef</div>
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={handleDecrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
        >
          Decrement
        </button>
        <div className="text-2xl font-semibold">
          {countRef.current}
        </div>
        <button
          onClick={handleIncrement}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default UseRef;
