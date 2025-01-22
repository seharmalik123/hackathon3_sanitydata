import Image from 'next/image'
import React from 'react'

const Dress = () => {
  return (
    <div className='w-full h-full mt-8 sm:h-[500px] bg-[#F0F0F0] flex flex-col justify-start items-center top-6 max-w-screen-xl max-auto'>
        {/* TOP DIV */}
        <div className='mt-2'>
        <h1 className='text-3xl font-bold pl-8 sm:pl-0'>BROWSE BY DRESS STYLE</h1>
       </div>
       {/* Bottom div */}
       <div className='w-[90%] h-full sm:h-[600px] mt-5 flex flex-wrap justify-center items-center'>
        <div className='w-[400px] h-[200px] m-1 relative'>
            <Image alt='dressstyle1' src={'/images/dress-style-1.png'} className="w-full h-full rounded-[20px]" width={100} height={100}/>
            <span className='absolute top-10 left-5 font-bold text-xl'>Casual</span>
        </div>
        <div className='w-[600px] h-[200px] m-1 relative'>
            <Image alt='dressstyle2' src={'/images/dress-style-2.png'} className="w-full h-full rounded-[20px]" width={100} height={100} />
            <span className='absolute top-10 left-5 font-bold text-xl'>Formal</span>
        </div>
        <div className='w-[600px] h-[200px] m-1 relative'>
            <Image alt='dressstyle3' src={'/images/dress-style-3.png'} className="w-full h-full rounded-[20px]" width={100} height={100} />
            <span className='absolute top-10 left-5 font-bold text-xl'>Party</span>
        </div>
        <div className='w-[400px] h-[200px] m-1 relative'>
            <Image alt='dressstyle4' src={'/images/dress-style-4.png'} className="w-full h-full rounded-[20px]" width={100} height={100}/>
            <span className='absolute top-10 left-5 font-bold text-xl'>Gym</span>
        </div>
       </div>
    </div>
  )
}

export default Dress