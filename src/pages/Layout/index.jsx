import React from 'react';
import { Outlet } from 'react-router-dom';
import Slidebar from '../../components/Slidebar';
import Header from '../../components/Header';
import { useTheme } from '../../context';

function Layout() {
  const { menu, setMenu } = useTheme();
  return (
    <div>
      <Slidebar />
      <div className={`flex-1 flex flex-col transition-all   ${menu ? ' w-full' : 'max-w-[80dvw] ml-[20dvw]'}`}>
        <Header />
        <div className=' mt-16'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;

