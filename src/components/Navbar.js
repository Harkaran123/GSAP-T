import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Logo from '../assets/S12.gif';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiMenu2Fill } from 'react-icons/ri';
import { SlMagnifier } from 'react-icons/sl';
import { AiOutlineCamera, AiOutlineHeart } from 'react-icons/ai';
import { BsBag, BsPerson } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';





const Navbar = () => {

  const app = useRef();

  const [menu, setMenu] = useState(false);

  const handleClick = () => {

    setMenu(!menu)
  }



  useEffect(() => {

    let ctx = gsap.context(() => {


        gsap.from(app.current, {
          y: -100,
          duration: 0.5,
          delay: 0.5,
        })



    }, app)

    return () => ctx.revert();

  }, [])

  


  return (
    <>
      <div ref={app} className='navbar w-full h-[100px] flex flex-row justify-between items-center px-12 bg-white'>

        <div >
          <RiMenu2Fill className='manu-icon' onClick={handleClick} size={30} />
        </div>

        <img className='w-[170px] h-[100px]' src={Logo} alt="" />

        <div className="icons flex flex-row justify-between items-center gap-2">
          <BsPerson size={25} />
          <SlMagnifier size={25} />
          <AiOutlineCamera size={25} />
          <AiOutlineHeart size={25} />
          <BsBag size={25} />
        </div>

        </div>

        <div className= {menu ? "absolute sidebar-show w-[50%] h-[100vh] bg-white text-center" : 
        "absolute sidebar-hide w-[50%] h-[100vh] bg-white text-center "}>
          <div className='absolute md:top-[4%] md:left-[90%] left-[80%]'>
            <RxCross1 onClick={handleClick} size={30} />
          </div>
          
          <div className="nav-items flex flex-col justify-between items-center gap-8 mt-[18%]">
            <Link to="#"><h1>HOME</h1></Link>
            <Link to="#"><h1>ABOUT</h1></Link>
            <Link to="#"><h1>CONTACT</h1></Link>
            <Link to="#"><h1>PRODUCTS</h1></Link>
          </div>

        </div>

      
    </>
  )
}

export default Navbar
