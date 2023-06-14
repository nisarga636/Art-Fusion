import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <div className="relative flex items-center">
        <input
          className="border border-gray-400 pl-10 pr-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search"
        />
        <span className="absolute left-3 text-gray-500">
          <AiOutlineSearch />
        </span>
      </div>
      <button className="bg-blue-800 text-white px-4 py-2 rounded-r-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
