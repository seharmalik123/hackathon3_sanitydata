import { Delete, DeleteIcon, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../../components/ui/button';
import { BreadcrumbDemo } from '../../components/BreadcrumbCode';

interface Icart{
    imageurl: string,
    title: string,
    id: number,
    size: string,
    color: string,
    price: string,
}
const cartItem:Icart[] = [
    {
        imageurl: "/images/pic13.png",
        title: 'Gradient Graphic T-shirt',
        id: 13,
        size: 'Large',
        color: 'White',
        price: '$145', 
    },
    {
        imageurl: "/images/pic3.png",
        title: 'Checkered Shirt',
        id: 3,
        size: 'Medum',
        color: 'Red',
        price: '$180', 
    },
    {
        imageurl: "/images/pic2.png",
        title: 'Skinny Fit Jeans',
        id: 2,
        size: 'Large',
        color: 'Blue',
        price: '$240', 
    },
]

const Cart = () => {
  return (
    <>

    <div className='pl-5'>
    <BreadcrumbDemo />
    <h1 className='font-bold text-2xl mt-2'>YOUR CART</h1>
    </div>
    <div className='flex flex-col md:flex-row justify-center items-center gap-3 mt-6'>
    {/* Left div */}
    <div className='w-full h-full md:w-[700px] md:h-[500px] border rounded-[20px]'>
        {
            cartItem.map((item)=>{
                return(
                   <div className='flex justify-between mt-4 p-4 border-b'key={item.id}>
                     <div className='flex gap-3'>
                        <Image src={item.imageurl} alt={item.title} className='rounded-[16px]' width={100} height={100}></Image>
                        <div>
                        <h3 className='font-bold'>{item.title}</h3>
                        <p className='text-sm'>Size:{item.size}</p>
                        <p className='text-sm'>color:{item.color}</p>
                        <p className='font-bold'>{item.price}</p>
                        </div>
                    </div>
                        {/*right side */}
                       <div className='flex flex-col justify-between items-center space-y-5'>
                       <Delete />
                        <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                         <Minus />
                         1
                         <Plus />
                        </div>
                       </div>
                    </div>
                )
            })
        }

    </div>
    
    {/* Right div */}
    <div className='w-full md:w-[400px] h-full md:h[450px] border rounded-[20px] flex flex-col justify-start items-center p-4'>
        <div className='w-[90%] space-y-2'>
        <h1 className='text-xl font-bold'>Order Summary</h1>
        <p className='flex justify-between'>Subtotal<span>$505</span></p>
        <p className='flex justify-between'>Discount (-20%)<span>-$113</span></p>
        <p className='flex justify-between'>Delivery Fee<span>$15</span></p>
        <p className='flex justify-between'>Total<span>$467</span></p>
        <div className='flex'>
        <input className='bg-[#F0F0F0] w-[200px] md:w-full text-gray-600 py-2 px-5 rounded-[16px] outline-none' placeholder='Add promo code' />
        <Button className='ml-1'>Apply</Button>
        </div>
        <Button className='w-full'>Go to Checkout</Button>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default Cart
