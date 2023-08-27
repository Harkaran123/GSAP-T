import React, { useRef, useEffect } from 'react';
import { CiFacebook, CiTwitter, CiInstagram, } from 'react-icons/ci';
import { PiPinterestLogoLight } from 'react-icons/pi';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tshirt from '../assets/tshirst3.png'


const PageThree = () => {

  gsap.registerPlugin(ScrollTrigger);

  const app = useRef();

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
        scrollTrigger: {
          trigger: app.current,
          Scroller: "body",
        }
       })

    }, app)

      

    return () => ctx.revert();
 
  }, [])


  return (
    <div className=' min-h-screen w-full'>
    <div ref={app} className='w-[85%] flex flex-row justify-between py-[150px] m-auto gap-10 '>
      <div className='tshirt'>
        <img src={Tshirt} alt="" />
      </div>
      <div className= 'box text-white w-[40%] flex flex-col'>
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

        <div className='flex flex-row justify-between items-center gap-2 w-[30%] pt-[20px]'>
          <CiFacebook size={40} />
          <CiTwitter size={40} />
          <CiInstagram size={40} />
          <PiPinterestLogoLight size={40} />
        </div>
      </div>

    </div>
    </div>
  )
}
// ml-[60%] items-start pt-[100px]
export default PageThree
