import React from 'react';
import ImageOne from '../../assets/imgs/_section_two.png';
import ImageTwo from '../../assets/imgs/_section_two_mob.png';

function SectionTwo() {
  return (
    <>
    <div className='flex yellow md:mt-96 justify-center items-center'>
     <div className='w-4/5 h-4/5'>
     <img alt='section_two' src={ImageOne} className='hidden md:flex object-cover md:mt-48 rounded-3xl'/>  
     <img alt='section_two' src={ImageTwo} className='flex md:hidden object-cover mt-40 rounded-3xl'/>  
    </div>
     </div>
    </>
  )
}

export default SectionTwo;