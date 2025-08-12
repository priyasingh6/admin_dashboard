
import React from 'react';
import { useTheme } from '../context/index';
import { Moon, Sun } from 'lucide-react';

function Toggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <div
        className="w-16 h-8 bg-gray-300 peer-focus:outline-none rounded-full
        peer dark:bg-gray-600 transition-colors duration-300"
      ></div>
      <div
        className="absolute left-1 top-0.1  w-7 h-7 bg-white rounded-full
        flex items-center justify-center  shadow-md
        peer-checked:translate-x-7 peer-checked:text-gray-800
         transition-all duration-300"
      >
        {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
      </div>
    </label>
  );
}

export default Toggle;
