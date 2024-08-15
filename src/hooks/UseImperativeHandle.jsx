import React, { useRef } from 'react';
import LoginImperative from '../components/LoginImperative';

const UseImperativeHandle = () => {
  const loginRef = useRef();

  console.log('render dari parent');

  return (
    <main className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <LoginImperative ref={loginRef} />
      <div className="mt-8 p-4 bg-white shadow-lg rounded-lg w-full max-w-sm text-center">
        <p className="text-lg font-semibold mb-4">Parent Component</p>
        <button
          onClick={() => loginRef.current.setLogin()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login dari parent
        </button>
      </div>
    </main>
  );
};

export default UseImperativeHandle;
