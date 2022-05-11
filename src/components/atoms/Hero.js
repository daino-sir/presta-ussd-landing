import React from 'react';
import HeroImg from '../../assets/imgs/hero-img.png';

function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center content-center h-screen w-full'>
        <div className='flex flex-col md:w-6/12 border border-black'>
        <h1 className="text-4xl text-left font-bold text-blue-600">
            Presta USSD
        </h1>
        <p className='text-blue-600 text-left'>Guarantee loans Anywhere and Anytime</p>
        </div>
        <div className='hidden md:flex border w-6/12 border-black'>
        <img className='w-full h-full bg-center' src={HeroImg} alt='hero_img'/>
        </div>
    </div>
  )
}

export default Hero;