import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Logo from '../assets/logo4.webp';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {

  const app = useRef();

  const [menu, setMenu] = useState(false);
  
  const handleclick = () => {

    setMenu(!menu)
  }



  useEffect(() => {

    let ctx = gsap.context(() => {


        gsap.from(".navbar", {
          y: -100,
          duration: 1,
          delay: 0.5,
        })
      
      

    }, app)

    return () => ctx.revert();

  }, [])

  
  return (
    <div ref={app} className='w-full uppercase text-[#E8E8E8] flex flex-row justify-between items-center px-[10%] py-4'>

      <div className='navbar w-[100%] h-[100%] flex flex-row justify-between items-center'>

      
      <div className='flex flex-row justify-between items-center gap-24'>
        <img className='w-[90px] h-[90px]' src={Logo} alt="" />



        <div className={menu ? 'mobile-show flex flex-row justify-between items-center gap-[24vw]' : 'mobile flex flex-row justify-between items-center gap-[24vw]'}>
        <img className='mobile-image w-[90px] h-[90px]' src={Logo} alt="" />
        
          <div className='cross md:hidden'>
            {/* <RxCross2 onClick={handleclick} size={30} color='black' /> */}
          </div>
          <div className='mobile-items flex flex-col first-letter md:flex-row gap-10 justify-between items-center'>
            <Link to={"#"}><h1 className='nav-items'>Home</h1></Link>
            <Link to={"#"}><h1 className='nav-items'>About</h1></Link>
            <Link to={"#"}><h1 className='nav-items'>Contact</h1></Link>
            <Link to={"#"}><h1 className='nav-items'>Products</h1></Link>
          </div>


          <button  className='bg-gradient-to-r from-[#F4256A] to-[#FE6412]  flex gap-2 items-center py-3 px-7 rounded-sm'>Buy Products
            <AiOutlineArrowRight  size={20} />
          </button>

        </div>
      </div>



      <div className='buger md:hidden'>
        <GiHamburgerMenu onClick={handleclick} size={30} />
      </div>
      </div>
    </div>
  )
}

export default Navbar
