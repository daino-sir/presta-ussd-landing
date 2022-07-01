import React from 'react';
import HeroImg from '../../assets/imgs/cover.png';
import HeroImgMob from '../../assets/imgs/cover-mob.png'

function Hero() {
  return (
    // <div className='flex flex-col md:flex-row items-center content-center justify-center h-screen w-full bg-white'>
    //     <div className='flex flex-col md:w-6/12 h-2/6 justify-evenly md:px-8'>
    //     <h1 className="text-6xl md:text-8xl md:text-left font-black text-blue-600 text-center">
    //     Guarantee loans <span>Anywhere & Anytime</span>
    //     </h1>
    //     <p className='text-lg font-thin md:text-xl text-blue-600 text-center md:text-left'>Guarantee loans Anywhere and Anytime</p>
    //     <div className='flex flex-col w-full items-center md:flex-row'>
    //       <button className='w-52 font-thin md:w-36 rounded-md button text-current'>Get Demo</button>
    //       {/* <button className='w-52 font-thin md:w-36 my-2 md:mx-2 rounded-md button text-current'>Sign In</button> */}
    //     </div>
    //     </div>
    //     <div className='hidden md:flex w-6/12'>
    //     <img className='w-full h-full bg-center' src={HeroImg} alt='hero_img'/>
    //     </div>
    // </div>
    <div className='w-full flex flex-col w-full dual-bg'>
     <img alt='section_two' src={HeroImg} className='hidden md:flex object-contain self-center h-full w-full'/>  
     <img alt='section_two' src={HeroImgMob} className='flex md:hidden object-contain h-full w-full'/>  
    </div>
  )
}

export default Hero;