import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Navbar({showSidebar,setShowSidebar,toggleSidebar}) {
    const style = { color: "#999999", }
  return (
    <div className='flex items-center justify-between z-25   bg-white pl-[10px] pb-[14px] pr-[15px] pt-[11px] px-4 w-full shadow-sm shadow-bottom'>
      {
             <span className='mobile-menu' onClick={toggleSidebar}><GiHamburgerMenu /></span>
        }
        <div>
            
<form class="w-[275px]   mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative flex items-center">
        <input type="search" id="default-search" class="block w-full p-[11px] ps-[30px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here" required />
        <span className='absolute left-[244px]'><CiSearch style={style} size={20}/></span>
    </div>
</form>

        </div>
        <div className='flex items-center gap-6'>
        <span className='bg-[#eeeeee] p-[10px] rounded-2xl cursor-pointer'><FaRegBell size={16} /></span>
        <span className='bg-[#eeeeee] p-[10px] rounded-2xl cursor-pointer'><FaRegMessage size={16} /></span>
        <span className='bg-[#eeeeee] p-[10px] rounded-2xl cursor-pointer'><CgProfile size={16}/></span>
        </div>
    </div>
  )
}
