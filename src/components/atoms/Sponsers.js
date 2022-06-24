import React from 'react';
import ImageTwo from '../../assets/imgs/sponsers.png';
import ImageTwoMob from '../../assets/imgs/Sponsers-mob.png';

function Sponsers() {
  return (
    <div className='w-full flex flex-col w-full dual-bg'>
     <img alt='section_two' src={ImageTwo} className='hidden md:flex object-none self-center h-full w-full'/>  
     <img alt='section_two' src={ImageTwoMob} className='flex md:hidden object-none h-full w-full'/>  
    </div>
  )
}

export default Sponsers;