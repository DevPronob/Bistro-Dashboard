import React from 'react'
import food1 from '../../Assets/food1.jpg'
import { Rating } from 'flowbite-react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Map from '../../Components/Map';
import MapChart from '../../Components/MapChart';
export default function analytics() {
  return (
   <div>
     <div cl>
        <div className='ps-4 pt-4 py-4'>
        <h3 className='text-lg font-medium py-2'>Analytics</h3>
        <p>Analytics / Analytics</p>
        </div>
        <div className='p-8'>
        <div class="flex flex-col  lg:grid lg:grid-cols-10 lg:gap-8 lg:px-4 lg:mt-5">
    <div class="col-span-6 p-18 shadow-lg m-[15px] bg-white ">
  
  
     <div className='px-2'>
     <div className='flex items-center justify-between p-[15px]'>
          <h3>Most Favorites Item</h3>
      
  
      </div>
     </div>
  
  
  
  
  <div className='px-3 flex items-center gap-[20px] my-3 px-3'>
      <div className='flex text-[11px] gap-[12px] items-center w-full'>
      <img className='w-[50px] h-[35px]' src={food1}alt="Girl in a jacket" width="500" height="600"/>
      <div>
          <p>Sweet cheezy pizza</p>
          <div className='flex items-center gap-2'>
          <p>
          <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
          </p>
          <span className='ms-1'>(Review 4.5 )</span>
          </div>
          <h5>3,35 Total Sales</h5>
      </div>
      
      <div className='w-[50px] h-[50px] ml-[0px]   lg:w-[50px] lg:h-[50px] lg:ml-[212px]'>
      <CircularProgressbar value={66} text={`${66}%`} />;
      </div>
      
    </div>
  </div>
  <hr/>
  
  
  <div className='px-3 flex items-center gap-[20px] my-3 px-3 w-full'>
      <div className='flex text-[11px] gap-[12px] items-center w-full'>
      <img className='w-[50px] h-[35px]' src={food1}alt="Girl in a jacket" width="500" height="600"/>
      <div>
          <p>Sweet cheezy pizza</p>
          <div className='flex items-center gap-2'>
          <p>
          <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
          </p>
          <span className='ms-1'>(Review 4.5 )</span>
          </div>
          <h5>3,35 Total Sales</h5>
      </div>
      
      <div className='w-[50px] h-[50px] ml-[0px]   lg:w-[50px] lg:h-[50px] lg:ml-[212px]'>
      <CircularProgressbar value={66} text={`${66}%`} />;
      </div>
      
    </div>
  </div>
  <hr/>
  
  
  <div className='px-3 flex items-center gap-[20px] my-3 px-3 w-full'>
      <div className='flex text-[11px] gap-[12px] items-center w-full'>
      <img className='w-[50px] h-[35px]' src={food1}alt="Girl in a jacket" width="500" height="600"/>
      <div>
          <p>Sweet cheezy pizza</p>
          <div className='flex items-center gap-2'>
          <p>
          <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
          </p>
          <span className='ms-1'>(Review 4.5 )</span>
          </div>
          <h5>3,35 Total Sales</h5>
      </div>
      
      <div className='w-[50px] h-[50px] ml-[0px]   lg:w-[50px] lg:h-[50px] lg:ml-[212px]'>
      <CircularProgressbar value={66} text={`${66}%`} />;
      </div>
      
    </div>
  </div>
  <hr/>

  <div className='px-3 flex items-center gap-[20px] my-3 px-3 w-full'>
      <div className='flex text-[11px] gap-[12px] items-center w-full'>
      <img className='w-[50px] h-[35px]' src={food1}alt="Girl in a jacket" width="500" height="600"/>
      <div>
          <p>Sweet cheezy pizza</p>
          <div className='flex items-center gap-2'>
          <p>
          <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
          </p>
          <span className='ms-1'>(Review 4.5 )</span>
          </div>
          <h5>3,35 Total Sales</h5>
      </div>
      
      <div className='w-[50px] h-[50px] ml-[0px]   lg:w-[50px] lg:h-[50px] lg:ml-[212px]'>
      <CircularProgressbar value={66} text={`${66}%`} />;
      </div>
      
    </div>
  </div>

  
  
  
    </div>
    <div class="col-span-4  p-18 shadow-lg m-[15px] bg-white h-[300px] p-[10px]">
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
        </div>
    </div>




<div className='flex items-center justify-between'>

</div>




   </div>
  )
}
