import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='sm:block'>
        <img
          className='w-full h-full object-cover'    /* https://images.unsplash.com/photo-1611425143678-08fc480cafde?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDM4fHxjYW1lcmElMjBjcmV3fGVufDB8fHx8MTY4NjE0NzQxOHww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450 */
          src="https://images.unsplash.com/photo-1496559249665-c7e2874707ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDF8fG1hbiUyMHJlY29yZGluZyUyMHdpdGglMjBjYW1lcmF8ZW58MHx8fHwxNjg2MTQ3ODYyfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
          alt=""
        />
      </div>

      <div className='bg-white flex flex-col justify-center'>
        <form className=' w-full h-screen bg-white p-8 px-8'>
        <h1 className=' text-3xl mt-7  dark:text-black font-bold text-center'>Art Fusion</h1>
          <h2 className='text-xl  mt-7 dark:text-black font-semibold text-center'>Log In</h2>
          <div className='text-sm p-28 flex flex-col text-black py-6'>
            <label>EMAIL OR PHONE NUMBER</label>
            <input 
              className='rounded-lg bg-gray-300 mt-2 p-2'
              type="email" placeholder='email or phone number' required 
            />
          </div>
          <div className='text-sm  p-28 flex flex-col text-black py-0'>
            <label>PASSWORD</label>

        
            <input /*</div><AiOutlineEyeInvisible className=" mr-2 text-xl" />*/
              className=' p-2 rounded-lg bg-gray-300 mt-1'
              type="password" placeholder='password' required></input> 
            
          </div>
          <div className='flex justify-evenly text-gray-400 py-2'>
                    <p className='flex flex-items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
          <center><button className='w-52 my-9 py-2 bg-blue-700 shadow-lg shadow-blue-700 hover:shadow-gray-500 hover:border-2 border-gray-700   hover:bg-gray-50  hover:text-blue-700 text-white font-semibold rounded-lg'>Log in</button></center>

          <center>
            <button className='p-24 py-2  flex items-center mb-4 bg-white shadow-lg hover:shadow-gray-500 border-2 border-gray-700 text-blue-600 font-bold rounded-lg'>
            <FcGoogle className=" mr-2 text-xl" />
        <span className="flex items-center">Sign in with google</span>

            
              </button></center>
        </form>
      </div>
    </div>
  );
}