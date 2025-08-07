import React, { createElement } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from  './pages/home';
import SiteProject from './pages/siteProject';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='siteProject' element={<SiteProject />} />
          <Route path='enquiry' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl' >Enquiry</div>} />
          <Route path='site-project' element={<SiteProject />} />
          <Route path='influencer-network' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl' >Influencer Network</div>} />
          <Route path='customer-network' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl'>Customer Network</div>} />
          <Route path='orders' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl'>Orders</div>} />
          <Route path='accounts' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl'>Accounts</div>} />
          <Route path='schemes-incentive' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl'>Schemes/Incentive</div>} />
          <Route path='secondary-billing-upload' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl'>Secondary Billing Upload</div>} />
          <Route path='dispatch' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl'>Dispatch</div>} />
          <Route path='master-box' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl'>Master Box</div>} />
          <Route path='stock' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl'>Stock</div>} />
          <Route path='attendance' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl'>Attendance</div>} />
          <Route path='checkin' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl'>Checkin</div>} />
          <Route path='leave' element={<div className='flex h-screen dark:bg-gray-900 dark:text-white p-6 text-xl'>Leave</div>} />
        </Route>
      </>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
