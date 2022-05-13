import React from 'react';
import { FAQdata } from '../../data/data';
import Faq from "react-faq-component";
import { config } from '../../data/constants/config';

function FAQsection() {
  return (
    <div className='flex flex-col justify-center h-screen w-full'>
      <div className='h-60 w-full flex flex-col px-12 md:px-36'>
      <Faq
        data={FAQdata}
        styles={styles}
        config={config}
      />
        </div>
    </div>
      );
}
const styles = {
  // bgColor: 'white',
  titleTextColor: "#3A73BE",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

export default FAQsection;