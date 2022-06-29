import React from 'react';
import Process from '../../assets/imgs/Process-two.png'

function GuarantorshipProcess() {
  return (
    <div className='flex flex-col px-6 bg-white w-full bg-gray-50'>
    <div className="w-full py-16">
    <h1 className="text-3xl md:text-6xl font-black text-gray-800 text-center">Loan Guarantorship has <br/><span className='font-black'>never been this easy</span></h1>
    </div>
    <div className="w-full">
    <p className="text-base md:text-lg font-black text-gray-800 text-center">How to apply for Guarantorship</p>
    </div>
    <div className="w-9/12 self-center py-16">
      <img
      className='object-contain'
      src={Process}
      />
    </div>
    </div>
  )
}

export default GuarantorshipProcess;