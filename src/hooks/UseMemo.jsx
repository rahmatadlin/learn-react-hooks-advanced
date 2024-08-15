import React, { useEffect, useMemo, useState } from 'react';

function getKuadrat(num) {
  console.log('fungsi kuadrat');
  for (let i = 0; i < 2000000000; i++) {}
  return num * num;
}

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [redButton, setRedButton] = useState(false);

  const kuadrat = useMemo(() => {
    return getKuadrat(count);
  }, [count]);

  const display = useMemo(() => {
    return {
      text: redButton
        ? 'Click untuk membuat button blue'
        : 'Click untuk membuat button red',
      color: `${redButton ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`,
    };
  }, [redButton]);

  useEffect(() => {
    console.log('display dibuat ulang');
  }, [display]);

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <div className="text-2xl font-semibold mb-4">useMemo</div>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${redButton ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
          onClick={() => setCount((count) => count - 1)}
        >
          Decrement
        </button>
        <div className="text-xl">{count}</div>
        <button
          className={`px-4 py-2 rounded ${redButton ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>
      </div>
      <button
        className={`px-4 py-2 rounded ${display.color} hover:opacity-80 transition duration-200`}
        onClick={() => setRedButton((color) => !color)}
      >
        {display.text}
      </button>
      <div className="mt-4 text-lg">
        Hasil dari count x count = {kuadrat}
      </div>
    </div>
  );
};

export default UseMemo;
