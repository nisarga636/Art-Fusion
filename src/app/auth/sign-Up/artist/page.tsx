'use client'

import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import Listbox1 from '@/components/ListBox';
export default function Artist() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='sm:block'>
        <img
          className='w-full h-full object-cover'    
          src="https://images.unsplash.com/photo-1611425143678-08fc480cafde?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDM4fHxjYW1lcmElMjBjcmV3fGVufDB8fHx8MTY4NjE0NzQxOHww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450 "
          alt=""
        />
      </div>

      <div className='bg-white  justify-center'>
        <form className=' w-full h-screen bg-white p-8 px-8'>
        <h1 className=' text-3xl mt-1     dark:text-black font-bold text-center'>Art Fusion</h1>
          <h2 className='text-xl  mt-7 dark:text-black font-semibold text-center'>Artist</h2>
        
         
            
          
          <div className='text-sm  p-28 flex flex-col text-black py-1'>
            <label>Category</label>
             <i ><Listbox1 ></Listbox1></i>  
            
          </div>
          


          <center><button className='w-52 mt-20 py-2 bg-blue-700 shadow-lg shadow-blue-700 hover:shadow-gray-500 hover:border-2 border-gray-700   hover:bg-gray-50  hover:text-blue-700 text-white font-semibold rounded-lg'>Sign up</button></center>

          <center>
            <button className='p-24 py-2 my-9  flex items-center mb-4 bg-white shadow-lg hover:shadow-gray-500 border-2 border-gray-700 text-blue-600 font-bold rounded-lg'>
            <FcGoogle className=" mr-2 text-xl" />
        <span className="flex items-center">Sign in with google</span>

              </button>
              <h3 className='text-3sm  mt-28 dark:text-black font-semibold text-center'>  <a href="/auth/sign-In" className="underline">already have an account?</a></h3>
              </center> 
        </form>

      </div>
    </div>
  );
}
