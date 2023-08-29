import React, { useEffect, useRef } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ShirtTwo from '../assets/tshirts_two.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from 'react-typed';


const HomeBanner = ({ circle}) => {

    gsap.registerPlugin(ScrollTrigger);
    const app = useRef();
    




    useEffect(() => {

        


        let ctx = gsap.context(() => {

            gsap.from('.texthome', {
                y: 100,
                opacity: 0,
                duration: 1,
                delay: 0.5,

            })

            gsap.from(".image1", {
                y: -150,
                duration: 1,
                rotation: 20,
            })

            gsap.from(".image2", {
                y: 200,
                duration: 1,
                rotation: -20,
            })

            gsap.to(".icon", {
                x: 5,
                repeat: -1,
            })

            gsap.to(".image1", {
                yPercent: 130,
                xPercent: -160,
                duration: 1,
                scrollTrigger: {
                    trigger: ".image1",
                    // markers: true,
                    start: "top -30%",
                    end: "bottom top",
                    scrub: 3,
                }
            })

            gsap.to(".image2", {
                yPercent: 130,
                xPercent: 10,
                duration: 1,
                scrollTrigger: {
                    trigger: ".image2",
                    // markers: true,
                    start: "top 5%",
                    end: "bottom top",
                    scrub: 3,
                }
            })





        }, app)

        return () => ctx.revert();



    }, [])




    return (
        <>
            <div ref={circle} className='homebanner circle absolute bg-white w-[18px] h-[18px] rounded-[50%]'></div>
            <div ref={app} className='text-white w-full min-h-screen'>
                <div className='texthome flex flex-col justify-between gap-[30px] md:w-[70%] md:pl-[120px] pl-[20px] pt-[60px] z-[-1]'>
                    <div className="">
                        <h1 className='fashion text-6xl md:text-8xl'>Fashion to</h1>
                        <h1 className='extreme text-6xl md:text-8xl'>Extreme</h1>
                        <Typed className='ml-2 mt-3'
                            strings={['Find all new trend', 'Fit for every size', 'Find your match']}
                            typeSpeed={40}/>
                    </div>
                    <div className='ml-2'>
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p className='text-[300]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Provident repellendus</p>
                    </div>

                    <div className='flex flex-row gap-9'>
                        <button className='bg-gradient-to-r from-[#F4256A] to-[#FE6412]  flex gap-2 items-center py-3 px-7 rounded-sm'>Shop Now
                            <AiOutlineArrowRight size={20} />
                        </button>
                        <button className='homebutton flex flex-row gap-2 items-center text-lg ml-2'>View Products <AiOutlineArrowRight className='icon' size={20} /></button>
                    </div>


                </div>


                <img className='image1 absolute top-[15%] left-[50%] z-10' src={ShirtTwo} alt="" />
                <img className='image2 absolute  top-[18%] left-[65%]' src={ShirtTwo} alt="" />

            </div>

            
        </>
    )
}

export default HomeBanner
