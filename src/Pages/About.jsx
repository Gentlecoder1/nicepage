import React from 'react'
import Hero from '../MyComponents/Service-Hero'
import Hero1 from '../assets/About-hero.png'
import Partners from '../MyComponents/Partners'
import Analytics from '../MyComponents/Analytics'
import Team from '../MyComponents/Team'
import Investors from '../MyComponents/Investors'
import CTA from '../MyComponents/CTA'
import Footer from '../MyComponents/Footer'

const About = () => {
  return (
    <div className='h-full'>
      <Hero title='Seamless Digital Experience Design' text='At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' image={Hero1}/>

      <Partners />
      <Analytics />
      <Team />
      <Investors />
      <CTA />
      <Footer />
    </div>
  )
}

export default About