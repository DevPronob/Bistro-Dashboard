import React from 'react'
import food1 from '../Assets/food1.jpg'
import food2 from '../Assets/food2.jpg'
import food13 from '../Assets/food3.jpg'
export default function ProductDetails() {
  return (
    <div class="grid grid-cols-10 gap-8 px-4 mt-5">
  <div class="col-span-6 bg-white">


   <div className='px-2'>
   <div className='flex items-center justify-between p-[15px]'>
        <h3>Recent Oder Request</h3>
    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown1" class="text-black bg-white border border-[#EEEEEE] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Month<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
   </svg>
   </button>
   
   
   <div id="dropdown1" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
       <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
         <li>
           <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Year</a>
         </li>
         <li>
           <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Day</a>
         </li>
         
       </ul>
   </div>

    </div>
   </div>




<div className='px-3 flex items-center gap-[20px] my-3 px-3'>
    <div className='flex text-[11px] gap-[12px] items-center '>
    <img className='w-[50px] h-[35px]' src={food1}alt="Girl in a jacket" width="500" height="600"/>
    <div>
        <p>Sweet cheezy pizza for kidsMeal (smail )</p>
        <p>#012365</p>
    </div>

    <div>
        <h4>Marvin McKinney</h4>
        <p>3891 Ranchview Dr. California 62639</p>
    </div>
<p>$12.5</p>
<p>X2</p>

    </div>
    <div>
        <p className='bg-[aliceblue] p-[7px] text-[11px] text-blue-500'>Pending</p>
    </div>
</div>
<hr/>


<div className='px-3 flex items-center gap-[20px] my-3'>
    <div className='flex text-[11px] gap-[12px] items-center '>
    <img className='w-[50px] h-[35px]' src={food1}alt="Girl in a jacket" width="500" height="600"/>
    <div>
        <p>Sweet cheezy pizza for kidsMeal (smail )</p>
        <p>#012365</p>
    </div>

    <div>
        <h4>Marvin McKinney</h4>
        <p>3891 Ranchview Dr. California 62639</p>
    </div>
<p>$12.5</p>
<p>X2</p>

    </div>
    <div>
        <p className='bg-[aliceblue] p-[7px] text-[11px] text-blue-500'>Pending</p>
    </div>
</div>
<hr/>


<div className='px-3 flex items-center gap-[20px] my-3'>
    <div className='flex text-[11px] gap-[12px] items-center '>
    <img className='w-[50px] h-[35px]' src={food1}alt="Girl in a jacket" width="500" height="600"/>
    <div>
        <p>Sweet cheezy pizza for kidsMeal (smail )</p>
        <p>#012365</p>
    </div>

    <div>
        <h4>Marvin McKinney</h4>
        <p>3891 Ranchview Dr. California 62639</p>
    </div>
<p>$12.5</p>
<p>X2</p>

    </div>
    <div>
        <p className='bg-[aliceblue] p-[7px] text-[11px] text-blue-500'>Pending</p>
    </div>
</div>
<hr/>




  </div>
  <div class="col-span-4  bg-white h-[300px] p-[10px]">
    {/* <!-- Content for the 30% width column --> */}
    <h4 className='p-5'>Daily Trending Menus</h4>
    <div className='flex items-center  gap-[9px] justify-around my-2'>
        <div className='flex items-center text-[13px] gap-[9px]'>
        <img className='w-[50px] h-[35px]' src={food1}alt="Girl in a jacket" width="500" height="600"/>
    <div>
        <p>Sweet cheezy pizza for kids Meal (smail )</p>
        <p>$5.6</p>
    </div>
        </div>
        <div className='text-[13px]'>
            <p>#1</p>
            <p>Order 56x</p>
        </div>
    </div>
    <hr/>
    <div className='flex items-center  gap-[9px] justify-around my-2'>
        <div className='flex items-center text-[13px] gap-[9px]'>
        <img className='w-[50px] h-[35px]' src={food1}alt="Girl in a jacket" width="500" height="600"/>
    <div>
        <p>Sweet cheezy pizza for kids Meal (smail )</p>
        <p>$5.6</p>
    </div>
        </div>
        <div className='text-[13px]'>
            <p>#1</p>
            <p>Order 56x</p>
        </div>
    </div>
    <div className='flex items-center  gap-[9px] justify-around'>
        <div className='flex items-center text-[13px] gap-[9px]'>
        <img className='w-[50px] h-[35px]' src={food1}alt="Girl in a jacket" width="500" height="600"/>
    <div>
        <p>Sweet cheezy pizza for kids Meal (smail )</p>
        <p>$5.6</p>
    </div>
        </div>
        <div className='text-[13px]'>
            <p>#1</p>
            <p>Order 56x</p>
        </div>
    </div>
  </div>
</div>
  )
}
