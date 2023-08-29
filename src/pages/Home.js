import React, { useEffect, useRef, useState } from 'react';
import HomeBanner from '../components/HomeBanner';
import PageThree from '../components/PageThree';
import PageTwo from '../components/PageTwo';
import gsap from 'gsap';

const Home = () => {

  const circle = useRef();

  

  const moveCircle = () => {
    window.addEventListener("mousemove", (dets) => {
      circle.current.style.transform = `translate(${dets.clientX - 10}px, ${dets.clientY - 125}px)`
    })



  }

  useEffect(() => {
    moveCircle();
  }, [])


  return (
    <div>
      <HomeBanner circle={circle}/>
      <PageTwo/>
      <PageThree />
    </div>
  )
}

export default Home
