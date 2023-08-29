import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

const PageTwo = ({circle}) => {

  const app = useRef();
  gsap.registerPlugin(ScrollTrigger);



  useEffect(() => {

    let ctx = gsap.context(() => {

        gsap.to(".live", {
          x: 300,
          duration: 0.9,
          opacity: 0,
          scrollTrigger: {
            trigger: ".live",
            start: "top 10%",
            end: "bottom top",
            // markers: true,
            scrub: true,
          }
        })

        gsap.to(".exp", {
          x: -280,
          duration: 0.9,
          opacity: 0,
          scrollTrigger: {
            trigger: ".exp",
            start: "top 20%",
            end: "bottom top",
            // markers: true,
            scrub: true,
          }
        })

        gsap.to(".fashion", {
          x: 280,
          duration: 0.9,
          opacity: 0,
          scrollTrigger: {
            trigger: ".fashion",
            start: "top 40%",
            end: "bottom top",
            // markers: true,
            scrub: true,
          }
        })

    }, app)



      

    return () => ctx.revert();
 
  }, [])

  return (

    <div  className=' w-full min-h-screen flex justify-center items-center'>
         
      <div ref={app} className='page2box md:w-[60%] flex flex-col justify-between items-center text-white'>
        <h2 className='live text-4xl md:text-[80px] pb-8'>LIVE THE</h2>
        <h1 className='exp extreme text-6xl md:text-[140px]'>EXPERINCE</h1>
        <h3 className='fashion text-4xl md:text-[50px] pt-8'>FOR FASHION</h3>
      </div>
    </div>
  )
}

export default PageTwo
