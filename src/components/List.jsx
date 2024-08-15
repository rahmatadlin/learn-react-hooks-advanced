import React, { useEffect, memo } from 'react';

const List = ({ handler }) => {
  const items = ['ikan', 'ayam', 'sapi', 'kambing', 'kucing'];

  useEffect(() => {
    console.log('Child Component rendered');
  }, [handler]);

  return (
    <div className="p-4 space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={handler}
          className="p-2 bg-gray-200 text-center rounded hover:bg-gray-300 cursor-pointer transition duration-200"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default memo(List);
