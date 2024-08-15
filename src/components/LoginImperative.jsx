import React, { forwardRef, useImperativeHandle, useState } from 'react';

const LoginImperative = (props, ref) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = () => {
    setIsLogin((login) => !login);
  };

  useImperativeHandle(ref, () => ({
    setLogin: handleClick,
  }));

  console.log('render dari child');

  return (
    <div className="flex flex-col items-center p-4">
      <ul className="list-none p-0 m-0">
        <li>
          <a
            onClick={handleClick}
            className={`cursor-pointer px-4 py-2 rounded text-white ${
              !isLogin ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'
            }`}
            href="#home"
          >
            {!isLogin ? 'Login' : 'Logout'}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default forwardRef(LoginImperative);
