import React, { useRef, useEffect } from 'react';
import { CiFacebook, CiTwitter, CiInstagram, } from 'react-icons/ci';
import { PiPinterestLogoLight } from 'react-icons/pi';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tshirt from '../assets/imagepag3.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import sideImage from '../assets/sideImageCube.png';


const PageThree = () => {

  gsap.registerPlugin(ScrollTrigger);

  const app = useRef();
  const ImageApp = useRef();

  useEffect(() => {

    let ctx = gsap.context(() => {

        gsap.from(".box", {
        x: 150,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        scrollTrigger: {
          trigger: app.current,
          Scroller: "body",
        }

      })

       gsap.from('.tshirt', {
        x: -150,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        rotate: 10,
        scrollTrigger: {
          trigger: app.current,
          Scroller: "body",
        }
       })

       gsap.to('.icon', {
        x:5,
        repeat: -1,
       })

       gsap.from('.image', {
        x: -150,
        yPercent: -23,
        rotate: 360,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".image",
          start: "top 5%",
          end: "top 50%",
          scrub: 4,

        }
      })
  

    }, app)

    
      

    return () => ctx.revert();
 
  }, [])


  return (
    <div className='min-h-screen w-full'>
    <div ref={app} className='md:w-[80%] flex flex-col md:flex-row justify-between pb-28 md:py-[160px] m-auto gap-5'>
      <div className='tshirt'>
        <img className='' src={Tshirt} alt="" />
      </div>
      <div className= 'box text-white px-4 md:w-[40%] flex flex-col'>
        <div>
          <h2 className='text-4xl mb-[-22px] pl-[5px]'>FASHION</h2>
          <h1 className='extreme text-[120px]'>FACTS</h1>
        </div>

        <div className='pl-[5px]'>
          <h2 className=' text-2xl'>FASHION ADVICE</h2>
          <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus iure repellat fuga eveniet molestiae nulla quae velit,
            a voluptatum magni quaerat mollitia vel natus dolore, optio, cum perspiciatis
            alias labore? voluptatum magni quaerat mollitia vel natus dolore, optio, cum perspiciatis </p>
        </div>

        <button  className='bg-gradient-to-r from-[#F4256A] to-[#FE6412]  flex gap-2 items-center py-3 px-7 w-[50%] md:w-[40%] rounded-sm mt-6'>Shop Now
            <AiOutlineArrowRight className='icon'  size={20} />
          </button>

        <div className='flex flex-row justify-between items-center gap-2 w-[30%] pt-[20px]'>
          <CiFacebook size={40} />
          <CiTwitter size={40} />
          <CiInstagram size={40} />
          <PiPinterestLogoLight size={40} />
        </div>
      </div>

    <img ref={ImageApp} className='image absolute top-[175%] left-[1%]' src={sideImage} alt="" />
     
    </div>

    
    
    </div>
  )
}
// ml-[60%] items-start pt-[100px]
export default PageThree
