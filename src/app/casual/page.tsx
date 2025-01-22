import { AccordionDemo } from '@/components/AccordionCode';
import { BreadcrumbDemo } from '@/components/BreadcrumbCode';
import { CheckboxDemo } from '@/components/CheckboxCode';
import { DressData } from '@/components/DressData';
import CasualShirts from '@/components/Shirts';
import Size from '@/components/Size';
import { SliderDemo } from '@/components/SliderCode';
import React from 'react'

const Casual = () => {
  return (
    <main className='flex flex-col sm:flex-row justify-center items-center space-x-6'>
      {/*Left div */}
    <div className='w-full h-full md:w-[295px] md:h-[1200px] border-rounded-[16px]'>
    <BreadcrumbDemo />
    <AccordionDemo />
    <SliderDemo />
    <CheckboxDemo />
    <Size />
    <DressData />
    
    </div>
    {/* Right div */}
    <div className='w-ful md:w-[900px] h-full sm:h-[1200px]'>
    <CasualShirts/>

    </div>
    </main>
  )
}

export default Casual;


                       