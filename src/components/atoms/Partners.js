import React from 'react';
import ImageTwo from '../../assets/imgs/_section_one2.png';
import ImageTwoMob from '../../assets/imgs/_section_one2_mob.png';

function Partners() {
  return (
    <>
        <div className='h-32 w-full'>
        <div className='h-full flex flex-col justify-center'>
        <div className='flex flex-col justify-center'>
        <h1 className="text-xl md:text-2xl md:text-center blue-text text-center">
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
        
         </div>
    </>
  )
}

export default Partners;