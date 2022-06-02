import React from 'react';
import { footerData } from '../../data/data';
import Faq from "react-faq-component";
import { config } from '../../data/constants/config';

function Footer() {
  return (
      <div className='flex flex-col-reverse md:flex-row h-screen justify-evenly blue'>
          <div className='flex flex-col w-full items-center justify-evenly md:w-1/5 px-6 md:px-0'>
            <p className='text-white font-thin text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper morbi vel montes, ipsum ultricies mi nunc, scelerisque ac. Lacus facilisis porttitor aliquam quam consectetur. Diam ultrices sem purus felis lectus ipsum, id gravida. Ac egestas ante in adipiscing in euismod ullamcorper elementum quis. Urna pretium sed lacus elit blandit non sed ultricies. In sed aliquam ultrices amet, enim nunc, ultrices viverra phasellus.
            </p>
            <div className='flex flex-col'>
            <h1 className='font-thin text-white text-lg'>
              Follow Us
            </h1>
            <div className='flex flex-row w-full justify-between'>
              <div className='bg-gray-300 w-16 h-16 rounded-full'></div>
              <div className='bg-gray-300 w-16 h-16 rounded-full'></div>
              <div className='bg-gray-300 w-16 h-16 rounded-full'></div>
              <div className='bg-gray-300 w-16 h-16 rounded-full'></div>
            </div>
            </div>
      </div>
      <div className='font-thin flex flex-col w-full md:mt-24 md:w-1/5 px-6 md:px-0'>
        <Faq
          data={footerData}
          styles={styles}
          config={config}
        />
      </div>
          <div className='flex flex-col w-full items-center md:w-1/5'><h1 className='text-white text-lg'>3</h1></div>
      </div>

  )
}
const styles = {
  bgColor: '#3A73BE',
  titleTextColor: 'white',
  rowTitleColor: "white",
  rowContentColor: 'white',
  // arrowColor: "red",
};
export default Footer;