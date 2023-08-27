import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

const PageTwo = ({ appref }) => {


  return (
    <div className='pageTwo w-full min-h-screen flex justify-center items-center'>
      <div className=' w-[60%] flex flex-col justify-between items-center text-white'>
        <h2 className='text-[80px] mb-[-40px]'>LIVE THE</h2>
        <h1 className='extreme text-[140px]'>EXPERINCE</h1>
        <h3 className='text-[30px]'>FOR FASHION</h3>
      </div>
    </div>
  )
}

export default PageTwo
