

import React from 'react';
import { useTheme } from '../context';
import { ChevronDown, Menu } from 'lucide-react';
import Toggle from './toggleBtn';
import { useLocation } from 'react-router-dom';

function Header() {
  const { menu, setMenu } = useTheme();
  const location = useLocation();

  const formatPathname = (path) => {
    if (path === '/' || path === '') return 'Dashboard';

    let cleanPath = path.startsWith('/') ? path.slice(1) : path;
    cleanPath = cleanPath.replace(/-/g, ' ');

    return cleanPath
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <header className={`
      fixed top-0 right-0 z-30 transition-all duration-300 ease-in-out
      ${menu ? 'left-0' : 'left-0 lg:left-[20%]'}
      bg-white dark:bg-black  dark:border-gray-800 
      px-4 lg:px-6 py-4
    `}>
      <div className='flex items-center justify-between'>
        
      
        <div className='flex items-center gap-4'>
         
          <button
            onClick={() => setMenu(!menu)}
            className='lg:hidden dark:text-white text-gray-900 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition-colors'
          >
            <Menu size={20} />
          </button>

          
          {menu && (
            <button
              onClick={() => setMenu(false)}
              className='hidden lg:block dark:text-white text-gray-900 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition-colors'
            >
              <Menu size={20} />
            </button>
          )}

          
          <h1 className='text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white'>
            {formatPathname(location.pathname)}
          </h1>
        </div>

      
        <div className='flex items-center space-x-3 lg:space-x-4'>
          <Toggle />
          
          <div className='flex items-center space-x-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition-colors'>
            <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center'>
              <span className='text-white font-semibold text-sm'>I</span>
            </div>
            <span className='hidden sm:block text-sm text-gray-700 dark:text-gray-300 font-medium'>
              Ishaan
            </span>
            <ChevronDown 
              size={16} 
              className='text-gray-700 dark:text-gray-300 hidden sm:block' 
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;