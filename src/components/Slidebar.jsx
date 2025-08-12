

import React, { useState } from 'react';
import {ChevronDown , X} from 'lucide-react';
import { useTheme } from '../context';
import { Link, useLocation } from 'react-router-dom';
import SidebarItems  from '../Data';


const tabs = ['All', 'Pending', 'Approved', 'Rejected', 'Suspended'];

function Sidebar() {
  const { menu, setMenu } = useTheme();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* mobile menu */}
      {!menu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMenu(true)}
        />
      )}

    
      <div className={`
        fixed top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out
        w-80 lg:w-[20%] 
        ${menu ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}
        dark:bg-black bg-white shadow-lg  dark:border-gray-800 
      `}>
        
         <div className='p-4  dark:border-gray-800 '>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>B</span>
              </div>
              <span className='font-bold text-lg dark:text-white text-gray-900'>
                BASIQ/360°
              </span>
            </div>
            
            
            <div 
              className='lg:hidden dark:text-white text-gray-900 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-1 px-2 rounded'
              onClick={() => setMenu(true)}
            >
              <X size={20} />
            </div>
          </div>
        </div>

        <div className='p-4 border-b-2 dark:border-gray-800 border-gray-200'>
          <select className='w-full p-2 rounded-md text-sm bg-white dark:bg-transparent dark:hover:bg-gray-800 dark:text-white text-gray-900 border dark:border-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'>
            {tabs.map((tab, index) => (
              <option key={index} value={tab}>{tab}</option>
            ))}
          </select>
        </div>

        {/* Nav items */}
        <nav className='flex-1  h-[80dvh] overflow-x-scroll px-2 py-2'>
          {SidebarItems.map((item, index) => (
            <div key={index}>
              <Link to={item.to} onClick={() => window.innerWidth < 1024 && setMenu(true)}>
                <div
                  className={`
                    flex items-center justify-between px-3 py-3 mb-1 rounded-md text-sm cursor-pointer transition-all duration-200
                    ${isActive(item.to) 
                      ? 'bg-blue-100 text-blue-600 dark:bg-gray-900 dark:text-gray-300 border-l-4 border-blue-600' 
                      : 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white dark:text-gray-300 text-gray-700'
                    }
                  `}
                  onClick={(e) => {
                    if (item.expandable) {
                      e.preventDefault();
                      toggleExpand(index);
                    }
                  }}
                >
                  <div className='flex items-center space-x-3'>
                    <span className='flex-shrink-0'>{item.icon}</span>
                    <span className='truncate'>{item.label}</span>
                  </div>
                  {item.expandable && (
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 flex-shrink-0 ${
                        expandedItems[index] ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>
              </Link>
              
             
              {item.expandable && expandedItems[index] && (
                <div className='ml-6 mb-2'>
                  <div className='pl-4 py-2 text-xs dark:text-gray-400 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer'>
                    Sub Item 1
                  </div>
                  <div className='pl-4 py-2 text-xs dark:text-gray-400 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer'>
                    Sub Item 2
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;