import React, { useState, createContext } from 'react';
import Navbar from '../components/Navbar';
import Page from '../components/Page';

export const LoginContext = createContext();

const UseContext = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={[isLogin, setIsLogin]}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="p-4">
          <Page />
        </main>
      </div>
    </LoginContext.Provider>
  );
};

export default UseContext;
