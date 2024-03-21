import React from 'react'

export default function AddMenu() {
  return (
    <div>
        <div className='flex flex-col gap-5 m-7'>
            <h3 className='text-lg font-medium'>Add Menu</h3>
            <p>Add Menu / Menu List / Categories</p>
        </div>
        <div className='p-14 shadow-lg m-[35px]'>
            
            <h4 className='py-3'>Choose Better Menu Type</h4>
            <div>
            <form>
    <div class="grid gap-10 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm  text-gray-900 dark:text-white">Food name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-[15px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm  text-gray-900 dark:text-white">Food Price</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-[15px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Price" required />
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm  text-gray-900 dark:text-white">Upload</label>
            <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Drop your imges here,</span> or browes</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm  text-gray-900 dark:text-white">Categories</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-[15px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seclect" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        
    </div>
    <button type="submit" class="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    <button type="button" class="text-blue bg-white border border-blue focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancle</button>
</form>
            </div>


        </div>
    </div>
  )
}
