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
      <div className='md:my-26 flex flex-col-reverse md:flex-row h-36 justify-evenly blue'>
      <form class="m-4 flex">
    	  <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com"/>
		    <button class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
	    </form>
      </div>
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