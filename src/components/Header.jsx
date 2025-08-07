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
    <div>
      <header className={`bg-white dark:bg-gray-900 px-6 py-4 transition-all ${menu ? '' : 'ml-[20dvw]'} fixed right-0 left-0`}>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-6'>
           {menu && (
  <div onClick={() => setMenu(!menu)} className='cursor-pointer dark:text-white'>
    <Menu />
  </div>
)}
            {formatPathname(location.pathname)}
          </h1>
          <div className='flex items-center space-x-4'>
            <Toggle />
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full'></div>
              <span className='text-sm text-gray-700 dark:text-gray-300'>Ishaan</span>
              <ChevronDown size={16} className='text-gray-700 dark:text-gray-300' />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
