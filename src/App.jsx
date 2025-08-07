import React, { createElement } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import SiteProject from './pages/siteProject';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='siteProject' element={<SiteProject />} />
          <Route path='enquiry' element={<div>Enquiry</div>} />
          <Route path='site-project' element={<SiteProject />} />
          <Route path='influencer-network' element={<div>Influencer Network</div>} />
          <Route path='customer-network' element={<div>Customer Network</div>} />
          <Route path='orders' element={<div>Orders</div>} />
          <Route path='accounts' element={<div>Accounts</div>} />
          <Route path='schemes-incentive' element={<div>Schemes/Incentive</div>} />
          <Route path='secondary-billing-upload' element={<div>Secondary Billing Upload</div>} />
          <Route path='dispatch' element={<div>Dispatch</div>} />
          <Route path='master-box' element={<div>Master Box</div>} />
          <Route path='stock' element={<div>Stock</div>} />
          <Route path='attendance' element={<div>Attendance</div>} />
          <Route path='checkin' element={<div>Checkin</div>} />
          <Route path='leave' element={<div>Leave</div>} />
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
