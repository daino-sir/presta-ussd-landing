import React from 'react';
import ImageTwo from '../../assets/imgs/_section_one2.png';
import ImageTwoMob from '../../assets/imgs/_section_one2_mob.png';

function SectionOne() {
  return (
    <>
        <div className='h-screen w-full blue sample-bg'>
         <div className='h-60 w-full flex flex-col'>
        </div>
         <div className='w-full flex flex-col'>
              <img alt='section_two' src={ImageTwo} className='hidden md:flex object-none h-full w-full'/>  
              <img alt='section_two' src={ImageTwoMob} className='flex md:hidden -mt-56  object-none h-full w-full'/>  
        </div>
         </div>
    </>
  )
}

export default SectionOne