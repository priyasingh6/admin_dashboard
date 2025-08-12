import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const SearchBar = ({ onSearch, onFieldsChange, initialFields = [] }) => {
  const [searchField, setSearchField] = useState(initialFields);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dropdownRef = useRef(null);

  const filterProjectss = [
    'Sr. No',
    'Date', 
    'Created By',
    'Type',
    'Priority',
    'Owner Name',
    'Mobile No.',
    'Address',
    'Actions'
  ];

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCheckboxChange = (Projects) => {
    const newFields = searchField.includes(Projects)
      ? searchField.filter(item => item !== Projects)
      : [...searchField, Projects];
    
    setSearchField(newFields);
    if (onFieldsChange) {
      onFieldsChange(newFields);
    }
    
    if (onSearch) {
      onSearch(searchValue, newFields);
    }
  };

  const handleSearchInput = (value) => {
    setSearchValue(value);
    if (onSearch) {
      onSearch(value, searchField);
    }
  };

  return (
    <div className="flex items-center space-x-2 flex-wrap">
      
      <div>
        <Search className="text-gray-800 dark:text-gray-400" size={12}/>
      </div>
     
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 rounded px-1 py-1 text-sm bg-white dark:bg-transparent text-gray-800 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-w-20"
        >
          <span className="text-left flex-1">
            {searchField.length === 0 
              ? 'Date' 
              : searchField.length === 1 
                ? searchField[0]
                : `${searchField.length} selected`
            }
          </span>
          <ChevronDown size={12} className={`transition-transform ml-1 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

       
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-[#3D3D3D] dark:border-gray-600 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
            <div className="py-1">
              {filterProjectss.map((Projects) => (
                <label
                  key={Projects}
                  className="flex items-center px-3 py-2 hover:bg-gray-500 dark:hover:bg-gray-700 cursor-pointer text-sm"
                >
                  <input
                    type="checkbox"
                    checked={searchField.includes(Projects)}
                    onChange={() => handleCheckboxChange(Projects)}
                    className="mr-2 h-3 w-3 rounded"
                  />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {Projects}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

     
      <input
        type="text"
        placeholder="Search by"
        value={searchValue}
        onChange={(e) => handleSearchInput(e.target.value)}
        className="rounded px-2 py-1 text-sm bg-white dark:bg-transparent dark:text-gray-400 border-none text-gray-800 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-1 focus:ring-gray-500 min-w-32"
      />
    </div>
  );
};

export default SearchBar;
