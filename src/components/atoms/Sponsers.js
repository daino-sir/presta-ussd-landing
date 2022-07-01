import React from 'react';
import ImageTwo from '../../assets/imgs/sponsers.png';
import ImageTwoMob from '../../assets/imgs/Sponsers-mob.png';
import OnePay from '../../assets/imgs/wanaanga-sacco.png'

function Sponsers() {
  return (
    <div className='w-full flex flex-col w-full dual-bg bg-white'>
     {/* <img alt='section_two' src={ImageTwo} className='hidden md:flex object-none self-center h-full w-full'/>  
     <img alt='section_two' src={ImageTwoMob} className='flex md:hidden object-none h-full w-full'/>   */}
     <section class="bg-white">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <p className="text-base md:text-lg font-black text-blue-600 text-center">Organizations Already Using Presta Sign</p>
            <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <a href="http://www.wana-anga.co.ke/" class="flex justify-center items-center">
                  <img src={OnePay}/>                        
                </a>
                <a href="http://www.wana-anga.co.ke/" class="flex justify-center items-center">
                <img src={OnePay}/>                                               
                </a>
                <a href="http://www.wana-anga.co.ke/" class="flex justify-center items-center">
                <img src={OnePay}/>                                                                 
                </a>
    
                <a href="http://www.wana-anga.co.ke/" class="flex justify-center items-center">
                <img src={OnePay}/>                                                                                    
                </a>
                <a href="http://www.wana-anga.co.ke/" class="flex justify-center items-center">
                <img src={OnePay}/>                                                                                    
                </a>
                <a href="http://www.wana-anga.co.ke/" class="flex justify-center items-center">
                <img src={OnePay}/>                                                                                    
                </a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Sponsers;