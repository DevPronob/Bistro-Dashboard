import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaArrowRight } from "react-icons/fa";
import MapChart from './MapChart';
import Map from './Map';
import img1 from '../Assets/profileImg1.jpg'
import img2 from '../Assets/profileimg2.jpg'
import { FiMapPin } from "react-icons/fi";
import '../Pages/Dashbooard/Dashboard.css'

export default function DetailsBars() {
    const [selection, setSelection] = useState('one_year');

  const data = [
    { day: 'Sun', revenue: 10000 },
    { day: 'Mon', revenue: 20000 },
    { day: 'Tue', revenue: 30000 },
    { day: 'Wed', revenue: 50000 },
    { day: 'Thu', revenue: 40000 },
    { day: 'Fri', revenue: 30000 },
    { day: 'Sat', revenue: 20000 },
  ];

  const style2 = { color: "#ffffff", }
  return (
    <div className='grid grid-cols-1 gap-8 flex flex-col md:flex-row mt-6 px-4 rounded-md lg:grid lg:grid-cols-2 lg:flex-row'>
<div className='bg-white p-6 rounded-md '>
<ResponsiveContainer width={450} height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis datakey="revenue"   />
          <Tooltip formatter={(value) => `$${value}`} />
          <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
</div>




<div className='w-full bg-[white] p-[20px] rounded-[10px]  lg:w-[510px] lg:bg-[white] lg:p-[20px] lg:rounded-[10px]'>


    <div className='hidden lg:flex lg:items-center lg:flex-row lg:justify-between gap-5 lg:p-[15px]'>
        <h3>Order Summary</h3>
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



    <div className='hidden lg:flex lg:items-center lg:text-[13px]'>
        <div className='p-[20px] border-r border-b border-l border-t border-black'>
            <h5>1256K</h5>
            <p>On Delivery</p>
        </div>
        <div className='p-[20px] border-r border-b border-t border-black'>
        <h5>1256K</h5>
            <p>On Delivery</p>
        </div>
        <div className='p-[20px] border-r border-b  border-t border-black'>
        <h5>1256K</h5>
            <p>On Delivery</p>
        </div>
        <div className='p-[20px] border-r border-b  border-t border-black'>
        <h5>1256K</h5>
            <p>On Delivery</p>
        </div>
    </div>

    <div className='flex flex-col items-baseline w-full gap-10 lg:bg-[#d6fbff52] lg:mt-3 lg:flex-row  lg:flex lg:items-center lg:justify-between lg:p-[11px]'>
        <p className='text-[black]'>New Order</p>
        <p>1525K</p>
        <p className='flex gap-2 items-center'>View All <FaArrowRight /></p>
    </div>
    
</div>

<div className='bg-white p-6 rounded-md h-[302px] w-full'>
<MapChart></MapChart>
</div>

<div className='bg-white p-6 rounded-md'>
<div className='flex items-center justify-between p-[15px]'>
        <h3>Deliyvery Map</h3>
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



<Map></Map>

<h4 className='py-5'>Upcomming Sehedule</h4>
<div className='flex items-center justify-between pb-2'>
<div className='flex items-center gap-[10px]'>
<img className='w-[50px] h-[35px]' src={img1}alt="Girl in a jacket" width="500" height="600"/>
<div className='text-[11px] text-[#0a0909bf]'>
    <h5>Mohan Cudhidi <span>(4 Iteam )</span></h5>
    <p>Will be shipping on 11 : 24 Am

</p>
</div>
</div>

<div className='flex items-center gap-[5px]'>
    <div className='text-[11px] text-[#000000e0]'>
        <p>1111 Hex Parker Rd. Allentown,</p>
        <p className='text-right'>South Africa</p>
    </div>
    <span className='bg-blue-500 p-[6px] rounded-lg'>
    <FiMapPin  style={style2}/>
    </span>
</div>






</div>

<hr />
<div className='flex items-center justify-between pt-2'>
<div className='flex items-center gap-[10px]'>
<img className='w-[50px] h-[35px]' src={img2} alt="Girl in a jacket" width="500" height="600"/>
<div className='text-[11px] text-[#0a0909bf]'>
    <h5>Mohan Cudhidi <span>(4 Iteam )</span></h5>
    <p>Will be shipping on 11 : 24 Am

</p>
</div>
</div>

<div className='flex items-center gap-[5px]'>
    <div className='text-[11px] text-[#000000e0]'>
        <p>1111 Hex Parker Rd. Allentown,</p>
        <p className='text-right'>South Africa</p>
    </div>
    <span className='bg-blue-500 p-[6px] rounded-lg'>
    <FiMapPin style={style2} />
    </span>
</div>






</div>



</div>

</div>
  )
}


