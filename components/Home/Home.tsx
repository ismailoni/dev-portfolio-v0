'use client';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Reviews from './Reviews/Reviews'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

useEffect(() => {
  const initAOS = async() => {
    await import('aos');
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
    })
  };

  initAOS();
},[])

  return (
    <div className='overflow-hidden'>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Reviews />
        <Blog />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home