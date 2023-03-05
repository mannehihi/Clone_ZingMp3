import React from "react";
import { TfiSearch } from 'react-icons/tfi'


function Search() {
  return (
    <div className="w-full flex items-center ">
      <span className="h-10 pl-4 bg-white flex items-center justify-center rounded-l-[20px]">
        <TfiSearch size={24} />
      </span>
      <input
            type='text'
            className="w-full outline-none bg-white px-4 py-2 rounded-r-[20px] h-10 text-gray-500"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát,..."
        />
    </div>
  );
}

export default Search;
