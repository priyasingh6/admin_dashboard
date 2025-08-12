import React from 'react';

function TableHeader() {
  return (
    <thead className='bg-gray-50 dark:bg-[#3D3D3D]'>
      <tr>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase'>Sr. No</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase'>Date</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase'>Created By</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase'>Type</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase'>Priority</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase'>Owner Name</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase'>Mobile No.</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase'>Address</th>
        <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase'>Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
