import React from 'react'
import Image from 'next/image'

const LogoSection = () => {
  return (
    <div className="max-w-screen-xl max-auto bg-black w-full h-[122px] flex justify-center space-x-4 md:justify-between items-center px-6 flex-wrap">
     <Image 
     src={"/images/versace.png.png"}
     width={100}
     height={100}
     alt="versace logo"
     className='w-[166.5px] h-[33px] text-white text-2xl md:text-xl'
     />  

      <Image 
     src={"/images/zara.png.png"}
     width={100}
     height={100}
     alt="zara logo"
     className='w-[91px] h-[38px] text-white text-2xl md:text-xl'
     />  

      <Image 
     src={"/images/gucci.png.png"}
     width={100}
     height={100}
     alt="gucci logo"
     className='w-[91px] h-[36px]v text-white text-2xl md:text-xl'
     />  

      <Image 
     src={"/images/parada.png.png"}
     width={100}
     height={100}
     alt="parada logo"
     className='w-[194px] h-[32px] text-white text-2xl md:text-xl'
     />  

      <Image 
     src={"/images/ck.png.png"}
     width={100}
     height={100}
     alt="calvin-klein logo"
     className='w-[207px] h-[33px] text-white text-2xl md:text-xl'
     />   

    </div>
  )
}

export default LogoSection;