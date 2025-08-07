// Home.jsx
import React from 'react';
import { useTheme } from '../context/index';
import { Moon } from 'lucide-react';

function Toggle() {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme} className='mt-2 px-3 py-2  dark:bg-yellow-500 text-black hover:bg-gray-100 dark:text-white rounded-md'>
        <Moon />
      </button>
    </div>
  );
}

export default Toggle;
