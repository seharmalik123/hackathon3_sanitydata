import React from 'react';
import { RxCross2 } from "react-icons/rx";

const Announcement = () => {
  return (
    <main className='bg-[#000000] w-full h-[38px] flex justify-center items-center max-w-screen-xl max-auto'>
        {/* Left content */}
        <div className='flex justify-center items-center'>
        <h3 className='text-white text-xs sm:text-sm'>
        Sign up and get 20% off to your first order. 
        </h3>
        <button className='text-white ml-3 text-xs sm:text-sm'>
        Sign Up Now
        </button>
        </div>
        <RxCross2  className='text-white absolute right-[50px] hidden sm:block'/>
    </main>
  )
}

export default Announcement