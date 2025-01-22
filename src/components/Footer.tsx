import Image from 'next/image';
import React from 'react';
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram,  IoLogoGithub } from "react-icons/io5";
import LatestOffer from './LatestOffer';

const Foter = () => {
  return (
    <main className='bg-[#F0F0F0] w-full h-full md:h-[450px] relative mt-32 max-w-screen-xl max-auto'>

     <span className='absolute top-[-80px]'>
        <LatestOffer /> 
        </span> 
        {/* Container*/}
        <div className='flex h-full md:h-[400px] flex-col md:flex-row justify-between items-start p-5 pt-[160px] sm:pt-32 border-b'>
        
        {/* top div */}

        <div className='flex flex-col justify-center items-center w-[200px]'>
          <ul>
            <h2 className='text-2xl sm:text-3xl font-extrabold'>SHOP.CO</h2>
            <p className='text-sm mt-1'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            {/* Icons */}
            <div className='flex items-center space-x-3 mt-1'>
            <IoLogoTwitter className='text-xl'/>
            <IoLogoFacebook className='text-xl'/>
            <IoLogoInstagram className='text-xl'/>
            <IoLogoGithub className='text-xl'/>
            </div>
         </ul> 
        </div>

        {/* mid div */} 
        <div className='w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 place-items-center space-y-4'>
            {/* box 1 */}
            
            <ul className='space-y-3 -ml-11 '>
                <h2 className='text-sm sm:text-2xl'>COMPANY</h2>
                <li className='text-sm'>About </li>
                <li className='text-sm'>Features</li>
                <li className='text-sm'>Work</li>
                <li className='text-sm'>Career</li>
            </ul>
            
            {/*box 2 */}
            <ul className='space-y-3'>
                <h2 className='text-sm sm:text-2xl'>HELP</h2>
                <li className='text-sm'>Customer Support</li>
                <li className='text-sm'>Delivery Details</li>
                <li className='text-sm'>Terms & Conditions</li>
                <li className='text-sm'>Privacy Policy</li>
            </ul>

            {/*box 3 */}
            <ul className='space-y-3'>
                <h2 className='text-sm sm:text-2xl'>FAQ</h2>
                <li className='text-sm'>Account</li>
                <li className='text-sm'>Manage Deliveries</li>
                <li className='text-sm'>Order</li>
                <li className='text-sm'>Payment</li>
            </ul>

            {/*box 4 */}
            <ul className='space-y-3'>
                <h2 className='text-sm sm:text-2xl'>RESOURCES</h2>
                <li className='text-sm'>Free eBooks</li>
                <li className='text-sm'>Development Tutorial</li>
                <li className='text-sm'>How to - Blog</li>
                <li className='text-sm'>Youtube Playlist</li>
            </ul>
            {/* boxes completed */}

        </div>
    </div>
     {/* bottom div */}
     <div className='flex flex-col sm:flex-row justify-between items-center mt-3'>
            <p className='text-sm'>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className='flex items-center justify-center m-4 gap-6'>
                <Image className='w-[50px]' src='/icons/visa.svg' width={100} height={100} alt="icons" />
                <Image className='w-[50px]' src='/icons/mastercard.svg' width={100} height={100} alt="icons" />
                <Image className='w-[50px]' src='/icons/paypal.svg' width={100} height={100} alt="icons" />
                <Image className='w-[50px]' src='/icons/applePay.svg' width={100} height={100} alt="icons" />
                <Image className='w-[50px]' src='/icons/googlePay.svg' width={100} height={100} alt="icons" />

            </div>
        </div>

    </main>
  )
}

export default Foter;