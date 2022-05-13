import React from 'react';
import ImageOne from '../../assets/imgs/bg_3.png';
import ImageOneMob from '../../assets/imgs/bg_3_mob.png';

function SectionThree() {
  return (
    <div className='w-full flex flex-col w-full dual-bg'>
     <img alt='section_two' src={ImageOne} className='hidden md:flex object-none self-center h-full w-full rounded-3xl'/>  
     <img alt='section_two' src={ImageOneMob} className='flex md:hidden object-none h-full w-full'/>  
    </div>
  )
}

export default SectionThree;