import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Logo from '../assets/logo4.webp';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {

    const app = useRef();

    useEffect(() => {

      let ctx = gsap.context(() => {

          gsap.from(app.current, {
          y: -100,
          duration: 1,
          delay: 0.5,
        })

      }, app)

      return () => ctx.revert();
   
    }, [])


  return (
    <div ref={app} className='w-full uppercase text-[#E8E8E8] flex flex-row justify-between items-center px-[10%] py-4'>
        <div className='flex flex-row justify-between items-center gap-24'>
        <img className='w-[90px] h-[90px]' src={Logo} alt="" />
        
        <div className='flex flex-row gap-10'>
            <h1 className='nav-items'>Home</h1>
            <h1 className='nav-items'>About</h1>
            <h1 className='nav-items'>Contact</h1>
            <h1 className='nav-items'>Products</h1>
        </div>
        </div>
        <button className='bg-gradient-to-r from-[#F4256A] to-[#FE6412]  flex gap-2 items-center py-3 px-7 rounded-sm'>Buy Products
        <AiOutlineArrowRight size={20} />
        </button>
    </div>
  )
}

export default Navbar
