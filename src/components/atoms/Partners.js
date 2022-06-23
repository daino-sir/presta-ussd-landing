import React from 'react';
import LogoImarisha from '../../assets/imgs/mask_group_3_1partner_logo.png';
import LogoFive from '../../assets/imgs/logoipsum-logo-21partner_logo.png';
import LogoThree from '../../assets/imgs/logoipsum-logo-22partner_logo-1.png';
import LogoFour from '../../assets/imgs/logoipsum-logo-22partner_logo-2.png';
import LogoTwo from '../../assets/imgs/logoipsum-logo-22partner_logo-2.png';

function Partners() {
  return (
    <>
        <div className='h-32 md:h-44 w-full'>
        <div className='h-full flex flex-col justify-center'>
        <div className='flex flex-col md:h-14 justify-center'>
        <h1 className="text-xl md:text-2xl md:text-center blue-text text-center">
            Organisations that already use Presta USSD
        </h1>
        </div>
        <div className='flex flex-row justify-evenly md:w-2/5 md:self-center content-center'>
              <img className='w-16 h-24 md:w-24 md:h-24 rounded-full'
              src={LogoImarisha}
              alt='Imarisha_Logo'
              />
              <img className='w-16 h-24 md:w-24 md:h-24 rounded-full'
              src={LogoThree}
              alt='Imarisha_Logo'
              />
              <img className='w-16 h-24 md:w-24 md:h-24 rounded-full'
              src={LogoFour}
              alt='Imarisha_Logo'
              />
              <img className='w-16 h-24 md:w-24 md:h-24 rounded-full'
              src={LogoFive}
              alt='Imarisha_Logo'
              />
        </div>
        </div>
        
         </div>
    </>
  )
}

export default Partners;