import React from 'react';
import Process from '../../assets/imgs/Process-two.png'

function SectionTwo() {
  return (
    <div className='flex flex-col px-6 bg-white w-full blue-bg'>
    <div className="w-full py-16">
    <h1 className="text-3xl md:text-6xl font-black text-white text-center">Loan Application <span className='font-black'>Simplified</span></h1>
    </div>
    <div className="w-full py-16">
      <img
      src={Process}
      />
    </div>
    </div>
  )
}

export default SectionTwo;