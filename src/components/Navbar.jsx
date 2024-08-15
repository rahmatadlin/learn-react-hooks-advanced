import React from 'react';
import LoginButton from './LoginButton';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-end space-x-4">
        <li>
          <LoginButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
