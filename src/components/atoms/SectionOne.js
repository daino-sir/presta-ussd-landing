import React from 'react';
import ImageTwo from '../../assets/imgs/_section_one2.png';
import ImageTwoMob from '../../assets/imgs/_section_one2_mob.png';

function SectionOne() {
  return (
    <>
        <div className='h-32 w-full blue sample-bg'>
        <div className='h-full flex flex-col justify-center'>
        <div className='flex flex-col justify-center'>
        <h1 className="text-xl md:text-2xl md:text-center font-thin text-white text-center">
            Organisations that already use Presta USSD
        </h1>
        </div>
        
        <div className='flex flex-row justify-evenly md:w-2/5 md:self-center content-center'>
              <div className='bg-gray-300 w-16 h-16 rounded-full'></div>
              <div className='bg-gray-300 w-16 h-16 rounded-full'></div>
              <div className='bg-gray-300 w-16 h-16 rounded-full'></div>
              <div className='bg-gray-300 w-16 h-16 rounded-full'></div>
        </div>
        </div>
        <div className='w-full flex flex-col'>
              <img alt='section_two' src={ImageTwo} className='hidden md:flex object-none h-full w-full'/>  
              <img alt='section_two' src={ImageTwoMob} className='flex md:hidden object-none h-full w-full'/>  
        </div>
         </div>
    </>
  )
}

export default SectionOne