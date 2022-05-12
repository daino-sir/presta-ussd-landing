import React from 'react';
import ImageOne from '../../assets/imgs/_section_one.png';
import ImageOneMob from '../../assets/imgs/_section_one_mob.png';
import ImageTwo from '../../assets/imgs/_section_one2.png';
import ImageTwoMob from '../../assets/imgs/_section_one2_mob.png';

function SectionOne() {
  return (
    <>
        <div className='h-full md:h-screen w-full blue'>
         <div className='h-80 w-full flex flex-col'>
              <img alt='section_two' src={ImageOne} className='hidden md:flex object-none h-full w-full'/>  
              <img alt='section_two' src={ImageOneMob} className='flex md:hidden -mt-28 md:m-0 object-none h-full w-full'/>  
        </div>
         <div className='w-full flex flex-col'>
              <img alt='section_two' src={ImageTwo} className='hidden md:flex object-none h-full w-full'/>  
              <img alt='section_two' src={ImageTwoMob} className='flex md:hidden -mt-56 md:m-0 object-none h-full w-full'/>  
        </div>
         </div>
    </>
  )
}

export default SectionOne