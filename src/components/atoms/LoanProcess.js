import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Process from '../../assets/imgs/processes.png'
import ProcessMobi from '../../assets/imgs/process-mobi.png'

export default function ProcessOne() {

  return (
    <div className='flex flex-col px-6 bg-white w-full blue-bg'>
      <div className="w-full py-16">
      <h1 className="text-3xl md:text-6xl font-black text-white text-center">Loan Application <br/><span className='font-black'>Simplified</span></h1>
      </div>
      <div className="w-full">
        <p className="text-base md:text-lg font-black text-white text-center">How to apply for a Loan</p>
      </div>
      <div className="w-9/12 self-center py-16">
        <img
        className='hidden md:flex object-contain'
        src={Process}
        />
         <img
        className='flex md:hidden object-contain'
        src={ProcessMobi}
        />
      </div>
    {/* <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <img
      src=''
      />
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-transparent shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-transparent p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <img className="" 
                    src={post.image}
                    alt='process'
                    /> 
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div> */}
    </div>
  )
}