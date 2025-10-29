import React from 'react'
import Hero from '../MyComponents/Service-Hero'
import Hero1 from '../assets/About-hero.png'
import scroll from '../assets/25002.jpg'
import Partners from '../MyComponents/Partners'
import Analytics from '../MyComponents/Analytics'
import Team from '../MyComponents/Team'
import Investors from '../MyComponents/Investors'
import CTA from '../MyComponents/CTA'
import Footer from '../MyComponents/Footer'

const About = () => {
  return (
    <div className='h-full'>
      <Hero company='About Us' title='Seamless Digital Experience Design' text='At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' image={Hero1}/>

      <Partners />
      <Analytics />
      <div className='w-full md:h-[400px] h-[300px] overflow-clip'>
        {/* <div className='h-[100%] w-full top-0 z-50 mx-auto bg-red-400'>
        </div> */}
          <img src={scroll} className='h-[100%] w-full fixed top-0 -z-50' alt="" />
      </div>
      <Team />
      <Investors />
      <CTA />
      <Footer />
    </div>
  )
}

export default About
