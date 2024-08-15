import React, { useContext } from 'react';
import { LoginContext } from '../hooks/UseContext';

const LoginButton = () => {
  const [isLogin, setIsLogin] = useContext(LoginContext);

  const handleClick = () => {
    setIsLogin((login) => !login);
  };

  return (
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
  );
};

export default LoginButton;
