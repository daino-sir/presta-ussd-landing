import React from 'react';
import { footerData } from '../../data/data';
import Faq from "react-faq-component";
import { config } from '../../data/constants/config';

function Footer() {
  return (
      <div className='flex flex-col md:flex-row md:mx-16 md:my-16 justify-evenly blue'>
        {/* 1st column */}
      <div className='md:my-26 flex flex-col my-6 h-36 w-full justify-evenly blue'>
          <p class="mt-2 max-w-[20rem] text-lg text-white/80"> Grow your business, unlock new efficiencies and create happier & more loyal customers with Presta</p>
      <h1 class="text-4xl font-bold text-white my-6">Follow Us</h1>
      <footer class="flex justify-between mt-2">
                <div class="flex gap-2">
                    <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    </span>
                    <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </span>
                    <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                    </span>
                    <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                    </span>
                </div>
            </footer>
      </div>
      <div className='md:my-26 flex flex-col my-6 h-36 w-full justify-evenly blue'>
      <h1 class="text-4xl font-bold text-white my-6">Products & Services</h1>
            <div class="rounded-lg w-1/2">
                <ul class="divide-y divide-gray-300">
                    <li class="p-4 hover:bg-gray-50 hover:text-blue-600 text-white cursor-pointer">Home</li>
                    <li class="p-4 hover:bg-gray-50 hover:text-blue-600 text-white cursor-pointer">About</li>
                    <li class="p-4 hover:bg-gray-50 hover:text-blue-600 text-white cursor-pointer">Presta Business</li>
                    <li class="p-4 hover:bg-gray-50 hover:text-blue-600 text-white cursor-pointer">Presta SACCO</li>
                </ul>
            </div>
      </div>
      <div className='md:my-26 flex flex-col h-36 w-full justify-evenly blue'>
      <h1 class="text-4xl font-bold text-white my-6">Request a Demo</h1>
      <form class="my-4 flex-row">
    	  <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l h-14 text-gray-800 border-gray-200 width-full bg-white" placeholder="your@mail.com"/>
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
