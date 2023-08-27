import React, { useEffect, useRef } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ShirtTwo from '../assets/tshirts_two.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeBanner = () => {

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
                    markers: true,
                    start: "top -20%",
                    end: "top 200%",
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
        <div ref={app} className='text-white w-full min-h-screen'>
            <div  className='texthome flex flex-col justify-between gap-[30px] w-[70%] pl-[120px] pt-[60px]'>
                <div className=''>
                    <h1 className='text-8xl'>Fashion to</h1>
                    <h1 className='extreme text-8xl '>Extreme</h1>
                </div>
                <div className='ml-2'>
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className='text-[300]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Provident repellendus</p>
                </div>
                <button className='homebutton flex flex-row gap-2 items-center text-lg ml-2'>View Products <AiOutlineArrowRight className='icon' size={20}/></button>
                
            </div>


            <img className='image1 absolute top-[15%] left-[50%]' src={ShirtTwo} alt="" />
            <img className='image2 absolute  top-[18%] left-[65%]' src={ShirtTwo} alt="" />
        
        </div>
    )
}

export default HomeBanner
