import React from 'react'

function Footer() {
  return (
      <div className='flex flex-col md:flex-row h-screen justify-evenly blue'>
          <div className='flex flex-col w-full items-center justify-evenly md:w-1/5 px-6 md:px-0'>
            <p className='text-white text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper morbi vel montes, ipsum ultricies mi nunc, scelerisque ac. Lacus facilisis porttitor aliquam quam consectetur. Diam ultrices sem purus felis lectus ipsum, id gravida. Ac egestas ante in adipiscing in euismod ullamcorper elementum quis. Urna pretium sed lacus elit blandit non sed ultricies. In sed aliquam ultrices amet, enim nunc, ultrices viverra phasellus.
            </p>
            <div className=''>
            <h1 className='text-white text-lg'>
              Follow Us
            </h1>
            </div>
      </div>
          <div className='flex flex-col w-full items-center md:w-1/5'><h1 className='text-white text-lg'>2</h1></div>
          <div className='flex flex-col w-full items-center md:w-1/5'><h1 className='text-white text-lg'>3</h1></div>
      </div>

  )
}

export default Footer;