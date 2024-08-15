/** @format */

import React, { useId } from 'react';

const Form = ({ text }) => {
  const id = useId();
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor={`${id}-1`}
          className="block text-sm font-medium text-gray-700"
        >
          {text}
        </label>
        <input
          id={`${id}-1`}
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor={`${id}-2`}
          className="block text-sm font-medium text-gray-700"
        >
          {text} 2
        </label>
        <input
          id={`${id}-2`}
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Form;
