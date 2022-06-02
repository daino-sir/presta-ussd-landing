import React from 'react';
import HeroImg from '../../assets/imgs/hero-img.png';

function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center content-center justify-center h-screen w-full bg-white'>
        <div className='flex flex-col md:w-6/12 h-2/6 justify-evenly md:px-8'>
        <h1 className="text-6xl md:text-8xl md:text-left font-black text-blue-600 text-center">
            Presta USSD
        </h1>
        <p className='text-lg font-thin md:text-xl text-blue-600 text-center md:text-left'>Guarantee loans Anywhere and Anytime</p>
        <div className='flex flex-col w-full items-center md:flex-row'>
          <button className='w-52 font-thin md:w-36 rounded-md button text-current'>Sign Up</button>
          <button className='w-52 font-thin md:w-36 my-2 md:mx-2 rounded-md button text-current'>Sign In</button>
        </div>
        </div>
        <div className='hidden md:flex w-6/12'>
        <img className='w-full h-full bg-center' src={HeroImg} alt='hero_img'/>
        </div>
    </div>
  )
}

export default Hero;