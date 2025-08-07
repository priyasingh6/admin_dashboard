import { MoreVertical } from 'lucide-react';
import React from 'react';

function TableBody({ paginatedProjects }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Hot':
        return 'bg-red-100 text-red-700';
      case 'Warm':
        return 'bg-yellow-100 text-yellow-700';
      case 'Cold':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  return (
    <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
      {paginatedProjects.map((project) => (
        <tr key={project.id} className='hover:bg-gray-50 dark:hover:bg-gray-700'>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100'>{project.id}</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100'>{project.date}</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400'>{project.createdBy}</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100'>{project.type}</td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(project.priority)}`}>
              ● {project.priority}
            </span>
          </td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100'>{project.owner}</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100'>{project.mobile}</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100'>{project.address}</td>
          <td className='px-6 py-4 whitespace-nowrap text-center'>
            <button className='text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'>
              <MoreVertical size={16} />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
