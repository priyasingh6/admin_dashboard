import React from 'react';
import { sidebarItems, tabs } from '../Data';
import { ChevronDown, Divide, X } from 'lucide-react';
import { useTheme } from '../context';
import { Link } from 'react-router-dom';

function Slidebar() {
  const { menu, setMenu } = useTheme();
  return (
    <div>
      {' '}
      <div className={`min-w-[20dvw] dark:bg-black bg-white shadow-sm fixed  bottom-0 z-50 top-0 transition-all ${menu ? '-left-[300px]' : ''}`}>
        <div className='p-4 gap-3 flex items-start'>
          <div className='flex items-center space-x-2 gap-12'>
            <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>B</span>
            </div>
            <span className='font-bold text-lg dark:text-white'>BASIQ/360°</span>
            <div className=' dark:text-white cursor-pointer' onClick={() => setMenu(true)}>
             
             <div className='flex items-start gap-4'>
              <X />
              </div> 
            </div>
          </div>
        </div>

        <div className='p-2'>
          <select className='w-full p-2 rounded-md text-sm mb-4 bg-white dark:bg-gray-800 dark:text-white border dark:border-gray-600'>
            {tabs.map((tab) => (
              <option value={tab}>{tab}</option>
            ))}
          </select>
        </div>

        <nav className='px-2 overflow-x-scroll h-[80dvh]'>
          {sidebarItems.map((item, index) => (
            <Link to={item.to} key={index}>
              <div
                className={`flex items-center justify-between px-3 py-2 mb-1 rounded-md text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-800' dark:text-gray-100
                 dark:hover:bg-blue-800 dark:hover:text-gray-100 
                }`}
              >
                <div className='flex items-center space-x-3'>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.expandable && <ChevronDown size={16} />}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Slidebar;
