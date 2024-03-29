import React from 'react';
// import { FAQdata } from '../../data/data';
// import Faq from "react-faq-component";
// import { config } from '../../data/constants/config';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';


function FAQsection() {
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
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm font-black text-gray-500">
              No. The Sacco loan  application form will be provided electronically to the loan applicant and guarantor's selected.
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
                <span className='text-base md:text-lg font-black text-blue-600 text-center'>2. How will I know that my guarantors have approved and Signed my loan application form?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm font-black text-gray-500">
              The loan applicant will be notified via sms everytime a guarantor signs or declines to sign the loan form.
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
                <span className='text-base md:text-lg font-black text-blue-600 text-center'>3. After applying for a loan are selected guarantors obliged to approve the loan?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm font-black text-gray-500">
              The guarantors will be notified of the applicants request via SMS at which point they could either choose to approve or decline to guarantee the loan.
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
                <span className='text-base md:text-lg font-black text-blue-600 text-center'>4. How can I change my guarantors if one rejects my Loan?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm font-black text-gray-500">
              Dial the Sacco USSD code (e.g. *483*123#) and select option 3. Replace guarantor and follow the prompts to replace a guarantor. The process is the same on the mobile app
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
                <span className='text-base md:text-lg font-black text-blue-600 text-center'>5. What if my guarantors don’t have a smartphone to access their email to sign the form?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 font-black text-sm text-gray-500">
              The loan application process can begin on  SACCO USSD and the guarantor can sign from on their email accessed from computer, tablet or smartphone, or any other electronic device at their convenience to sign the loan form.
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
                <span className='text-base md:text-lg font-black text-blue-600 text-center'>6. Is the loan application process secure?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm font-black text-black">
              Yes. The loan application process is only accessible to the Sacco membership of which each member will create a security PIN to access the service. This PIN is not to be shared with anyone else.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </div>
    </div>
  )
}

export default FAQsection;