import React, { useContext } from 'react';
import { LoginContext } from '../hooks/UseContext';

const Page = () => {
  const [isLogin] = useContext(LoginContext);

  return (
    <div className="container mx-auto p-4">
      <div
        className={`text-center text-lg font-semibold mt-4 ${
          isLogin ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {isLogin ? 'You Are Logged In' : 'You Are Logged Out, Please Log In ...'}
      </div>
    </div>
  );
};

export default Page;
