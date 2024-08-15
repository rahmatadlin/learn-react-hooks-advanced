import React, { useRef, useState, useLayoutEffect } from 'react';

const UseLayoutEffect = () => {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef();

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);
    for (let i = 0; i <= 100000000; i++) {
      if (i === 100000) setSectionStyle({ paddingTop: `${random}px` });
    }
  }, [number]);

  return (
    <div className="container mx-auto p-4">
      <section
        className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
        ref={sectionRef}
        style={sectionStyle}
      >
        <div className="flex justify-center items-center space-x-4 mb-4">
          <button
            onClick={() => setNumber((prev) => prev - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
          >
            -
          </button>
          <div className="text-2xl font-bold">{number}</div>
          <button
            onClick={() => setNumber((prev) => prev + 1)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
          >
            +
          </button>
        </div>
      </section>
    </div>
  );
};

export default UseLayoutEffect;
