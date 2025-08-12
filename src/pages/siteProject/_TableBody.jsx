import { MoreVertical } from 'lucide-react';
import React from 'react';
import { useTheme } from '../../context';




function TableBody({ paginatedProjects }) {

  const { theme } = useTheme();
  console.log(theme);
  


  
 const getPriorityColor = (priority) => {
  const baseClasses = 'inline-flex px-2 py-2 text-xs font-semibold rounded-md min-w-[4rem]';

  const colors = {
    Hot: theme === 'dark'
      ? 'bg-gradient-to-r from-neutral-900 from-0% via-red-600 via-100% text-white border border-red-600'
      : 'bg-pink-100 text-red-700 border-none border-red-600',

    Warm: theme === 'dark'
      ? 'bg-gradient-to-r from-neutral-900 from-0% via-yellow-600 via-100% text-white border  border-amber-600 '
      : 'bg-orange-100 text-yellow-600 border-none border-amber-600',

    Cold: theme === 'dark'
      ? 'bg-gradient-to-r from-neutral-900 from-0% via-blue-600 via-100% text-white border border-blue-700'
      : 'bg-blue-50 text-blue-700 border border-none',
  };

  const dotColors = {
    Hot: 'text-red-500',
    Warm: 'text-amber-500',
    Cold: 'text-blue-500',
  };

  return (
    <span className={`${baseClasses} ${colors[priority] || colors.Hot}`}>
      <span className={`${dotColors[priority] || dotColors.Hot} mr-1`}> ● </span>
      {priority}
    </span>
  );
};


  return (
   <tbody className="divide-y divide-gray-200 dark:divide-none  w-full">
  {paginatedProjects.map((project, index) => (
    <tr
      key={project.id}
      className={`hover:bg-gray-50 dark:hover:bg-slate-800 ${
        theme === "dark"
          ? index % 2 === 0
            ? "bg-[#212121] text-white" // First, third, fifth...
            : "bg-black text-white" // Second, fourth, sixth...
          : ""
      }`}
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.date}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  ">
        {project.createdBy}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.type}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {getPriorityColor(project.priority)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.owner}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.mobile}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.address}</td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
          <MoreVertical size={16} />
        </button>
      </td>
    </tr>
  ))}
</tbody>

  );
}

export default TableBody;
