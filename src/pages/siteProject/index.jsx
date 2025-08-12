import React, { useState } from "react";
import { projects, tabs } from "../../Data";
import { Search, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import TableHeader from "./_TableHeader";
import TableBody from "./_TableBody";
import SearchBar from "./_Search";

function SiteProject() {

const fieldMap = {
  'Sr. No': 'id',
  'Date': 'date',
  'Created By': 'createdBy',
  'Type': 'type',
  'Priority': 'priority',
  'Owner Name': 'owner',
  'Mobile No.': 'mobile',
  'Address': 'address'
};

  const [activeTab, setActiveTab] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFields, setSelectedFields] = useState([]);
  const itemsPerPage = 10;

 const filteredProjects = projects.filter(project => {
  if (selectedFields.length === 0) return true;

  return selectedFields.some(field => {
    const key = fieldMap[field];
    const value = project[key]?.toString().toLowerCase() || '';
    return value.includes(searchTerm.toLowerCase());
  });
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
      <div className="mt-10">
        <div className="flex-1 px-6  w-[95%] mb-4 rounded-md m-auto  dark:bg-[#212121]   border-2 dark:border-gray-600  ">
          
          <div className="flex items-center justify-between mb-6 flex-wrap mt-4 relative">
            <div className="flex space-x-1 gap-3 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors dark:bg-[#212121] border dark:border-gray-600   dark:text-black ${
                    activeTab === tab
                      ? "text-white dark:text-black bg-blue-600 dark:bg-white "
                      : " dark:text-gray-300 hover:text-white text-balck dark:hover:text-white hover:bg-blue-600 dark:hover:bg-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4 flex-wrap gap-3 ">
              <div className=" mt-2 w-auto flex items-center space-x-4 flex-wrap border border-gray-300 dark:border-gray-600 rounded-md gap px-1 py-1">
                <SearchBar
                  initialFields={[]}
                  onSearch={(value, fields) => {
                    setSearchTerm(value);
                    setSelectedFields(fields);
                  }}
                  onFieldsChange={(fields) => setSelectedFields(fields)}
                />
              </div>

              <button className="flex items-center space-x-2 bg-blue-600 dark:bg-[#212121] border dark:border-gray-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                <span>Add New</span>
                <span className="   dark:text-gray-500  rounded-full font-semibold flex items-center justify-center dark:bg-[#212121] border dark:border-gray-600">
                  <Plus size={16} />
                </span>
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-[#212121] rounded-lg shadow-sm ">
            <div className="overflow-x-auto min-h-[80dvh]">
              <table className=" w-full">
                <TableBody paginatedProjects={paginatedProjects} />
                <TableHeader />
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4  dark:bg-[#212121]">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {filteredProjects.length > itemsPerPage && (
                  <div className=" dark:text-white ">
                    <button
                      className=" dark:bg-[#3D3D3D] text-md p-2 rounded-md  dark:shadow-md  dark:text-white"
                      onClick={() =>
                        setCurrentPage(Math.max(1, currentPage - 1))
                      }
                    >
                      <div className=" flex items-center  gap-6">
                        <ChevronLeft size={16} />
                        Previous
                      </div>
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          className={`mr-2 ml-2 ${
                            page === currentPage
                              ? " dark:bg-[#3D3D3D] text-md p-2 px-6 rounded-md  dark:shadow-md  dark:text-white"
                              : ""
                          } `}
                          onClick={() => setCurrentPage(page)}
                          style={{
                            fontWeight:
                              currentPage === page ? "bold " : "normal ",
                          }}
                        >
                          {page}
                        </button>
                      )
                    )}
                    <button
                      className=" dark:bg-[#3D3D3D] text-md p-2 rounded-md  dark:shadow-md  dark:text-white"
                      onClick={() =>
                        setCurrentPage(Math.min(currentPage + 1, totalPages))
                      }
                    >
                      <div className=" flex items-center  gap-6">
                        Next
                        <ChevronRight size={16} />
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteProject;
