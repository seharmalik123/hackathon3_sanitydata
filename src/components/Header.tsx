import React from 'react';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { SheetSide } from './SheetCode';
import { NavigationMenuDemo } from './NavigationMenu';
import { FaShoppingCart } from 'react-icons/fa';



const Header = () => {
  return (
    <header className='w-full h-[60px] bg-white flex justify-between items-center max-w-screen-xl max-auto'>
        <div className='flex justify-center items-center'>
        <SheetSide />
        <h1 className='text-xl sm:text-3xl font-bold pl-2'>
            SHOP.CO
        </h1>
        </div>

        {/* Navbar content */}
        <ul className='hidden md:block'>
            <li className='space-x-5 flex items-center'>
                <Link href={""}> <NavigationMenuDemo /></Link>
                <Link href={""}>On Sale</Link>
                <Link href={"/Products"}>New Arrivals</Link>
                <Link href={"/casual"}>Brands</Link>
            </li>
        </ul>
        {/* Search input */}
        <div className='hidden md:block'> 
        <div className='flex justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]'>
        <CiSearch  className='text-xl ml-2 '/>
        <input placeholder='search item...' className='w-full h-full rounded-[62px] outline-none ml-2 bg-[#F0F0F0] ' />
        </div>
        </div>

        {/* Cart and profile icon */}
        <div className='flex items-center mr-7 space-x-5'>
        <CiSearch  className='text-xl ml-2 md:hidden'/>
        <Link href={"/cart"}> 
        <FaShoppingCart className='text-2xl'/>
        </Link>
        <CgProfile className='text-2xl'/>
        </div>
       
        
    </header>
  )
}

export default Header;