import React, { useRef } from 'react';

const UseRef2 = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <input
        ref={inputRef}
        type="text"
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={focusInput}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Focus Input
      </button>
    </div>
  );
};

export default UseRef2;
