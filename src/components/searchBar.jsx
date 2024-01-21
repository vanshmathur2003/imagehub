/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchBar = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='relative flex items-center justify-center pt-5 mt-3 pb-5'>
      <div className='relative'>
        <span className='bg-zinc-300 rounded-md flex items-center px-3 sm:px-4'>
          <svg className="h-5 w-5 text-white mr-2 sm:mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <form onSubmit={onSubmit} className='flex items-center '>
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder='Search Images'
              className='bg-zinc-300 bg-opacity-55 text-gray-800 outline-none pl-1 sm:pl-2 pr-8 sm:pr-10 py-2 w-40 sm:w-56'
            />
            <button type="submit" className='text-white pl-1 sm:pl-2 py-2 sm:py-3 rounded-md hover:text-black'>
              Search
            </button>
          </form>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
