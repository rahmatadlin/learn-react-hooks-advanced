import React, { useCallback, useState } from 'react';
import List from '../components/List';

const UseCallback = () => {
  const [state, setState] = useState(false);
  const [dep, setDep] = useState(false);
  console.log('Parent Component rendered');

  const handler = useCallback(
    (event) => {
      console.log('You clicked ', event.currentTarget);
    },
    [dep]
  );

  const stateHandler = () => {
    setState(!state);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <button
        onClick={stateHandler}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Change State Of Parent Component
      </button>
      <List handler={handler} />
      <button
        onClick={() => setDep(!dep)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
      >
        Ganti Dependency
      </button>
    </div>
  );
};

export default UseCallback;
