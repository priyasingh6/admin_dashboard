import React, { useState } from "react";
import { projects, tabs } from "../../Data";
import { Search, Plus } from "lucide-react";
import TableHeader from "./_TableHeader";
import TableBody from "./_TableBody";

function SiteProject() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("Date");

  const itemsPerPage = 10;

  const filteredProjects = projects.filter((project) => {
    if (searchField === "Actions") return true;
    const fieldValue = project[camelCase(searchField)]
      ?.toString()
      .toLowerCase();
    return fieldValue?.includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function camelCase(str) {
    return str
      .replace(/\s(.)/g, (match, group1) => group1.toUpperCase())
      .replace(/\s/g, "")
      .replace(/^(.)/, (match, group1) => group1.toLowerCase());
  }

  return (
    <>
      <div className="flex-1 p-6  dark:bg-gray-900 w-full ">
        {/* Tabs and Actions */}
        <div className="flex items-center justify-between mb-6 flex-wrap">
          <div className="flex space-x-1 gap-3 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4 flex-wrap gap-3">
            <div className="flex items-center space-x-2 flex-wrap">
              <div className="relative ">
                  <Search
                    size={16}
                    className="text-gray-400 dark:text-gray-500   absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                  />
               
                <input
                  type="text"
                  placeholder={`Search by ${searchField}`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rounded px-8 py-1 text-sm bg-white dark:bg-gray-800 dark:text-white border dark:border-gray-600"
                />
              </div>
              <select
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
                className="rounded px-3 py-1 text-sm bg-white dark:bg-gray-800 dark:text-white border dark:border-gray-600"
              >
                <option>Sr. No</option>
                <option>Date</option>
                <option>Created By</option>
                <option>Type</option>
                <option>Priority</option>
                <option>Owner Name</option>
                <option>Mobile No.</option>
                <option>Address</option>
                <option>Actions</option>
              </select>
            </div>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              <span>Add New</span>
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm ">
          <div className="overflow-x-auto min-h-[80dvh]">
            <table className="w-full">
              <TableBody paginatedProjects={paginatedProjects} />
              <TableHeader />
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-center gap-2">
              
              {filteredProjects.length > itemsPerPage && (
                <div className=" dark:text-white">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        className=" mr-2 ml-2"
                        onClick={() => setCurrentPage(page)}
                        style={{
                          fontWeight: currentPage === page ? "bold" : "normal",
                        }}
                      >
                        {page}
                      </button>
                    )
                  )}
                  <button
                    onClick={() =>
                      setCurrentPage(Math.min(currentPage + 1, totalPages))
                    }
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteProject;
