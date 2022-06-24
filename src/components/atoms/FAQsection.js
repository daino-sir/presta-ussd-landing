import React from 'react';
// import { FAQdata } from '../../data/data';
// import Faq from "react-faq-component";
// import { config } from '../../data/constants/config';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';


function FAQsection() {
  // return (
  //   <div className='flex flex-col justify-center h-screen bg-white w-full'>
  //     <div className='h-full w-full flex flex-col px-12 font-thin md:px-36'>
      
  //       </div>
  //   </div>
  //     );
  return (
    <div className='flex flex-col px-6 bg-white w-full bg-white'>
    <div className="w-full py-16">
    <h1 className="text-3xl md:text-6xl font-black text-blue-600 text-center">FAQ's</h1>
    </div>
    <div className="w-9/12 self-center py-2">
    <Disclosure>
        {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200">
                <span className='text-base md:text-lg font-black text-blue-600 text-center'>1.  Do I need to physically go to my Sacco and collect a Loan Application Form?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper morbi vel montes, 
              ipsum ultricies mi nunc, scelerisque ac. Lacus facilisis porttitor aliquam quam consectetur. 
              Diam ultrices sem purus felis lectus ipsum, id gravida. Ac egestas ante in adipiscing in euismod 
              ullamcorper elementum quis. Urna pretium sed lacus elit blandit non sed ultricies. In sed aliquam ultrices amet, 
              enim nunc, ultrices viverra phasellus.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        </div>
        <div className="w-9/12 self-center py-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200">
                <span className='text-base md:text-lg font-black text-blue-600 text-center'>2.  How will I know that my guarantors have approved and Signed my loan Request?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper morbi vel montes, 
              ipsum ultricies mi nunc, scelerisque ac. Lacus facilisis porttitor aliquam quam consectetur. 
              Diam ultrices sem purus felis lectus ipsum, id gravida. Ac egestas ante in adipiscing in euismod 
              ullamcorper elementum quis. Urna pretium sed lacus elit blandit non sed ultricies. In sed aliquam ultrices amet, 
              enim nunc, ultrices viverra phasellus.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        </div>
        <div className="w-9/12 self-center py-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200">
                <span className='text-base md:text-lg font-black text-blue-600 text-center'>3.  How can I change my guarantors if one rejects my Loan?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper morbi vel montes, 
              ipsum ultricies mi nunc, scelerisque ac. Lacus facilisis porttitor aliquam quam consectetur. 
              Diam ultrices sem purus felis lectus ipsum, id gravida. Ac egestas ante in adipiscing in euismod 
              ullamcorper elementum quis. Urna pretium sed lacus elit blandit non sed ultricies. In sed aliquam ultrices amet, 
              enim nunc, ultrices viverra phasellus.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        </div>
        <div className="w-9/12 self-center py-2 pb-16">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200">
                <span className='text-base md:text-lg font-black text-blue-600 text-center'>4.  What if my guarantors don’t have a smart phone to access their email to sign the form?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper morbi vel montes, 
              ipsum ultricies mi nunc, scelerisque ac. Lacus facilisis porttitor aliquam quam consectetur. 
              Diam ultrices sem purus felis lectus ipsum, id gravida. Ac egestas ante in adipiscing in euismod 
              ullamcorper elementum quis. Urna pretium sed lacus elit blandit non sed ultricies. In sed aliquam ultrices amet, 
              enim nunc, ultrices viverra phasellus.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </div>
    </div>
  )
}

export default FAQsection;