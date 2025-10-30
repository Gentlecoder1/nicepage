import Hero from '../MyComponents/Home-Hero'
import Partners from '../MyComponents/Partners'
import Solutions from '../MyComponents/Solutions'
import Experience from '../MyComponents/Home-Experience'
import Implement from '../MyComponents/Implement'
import Subscriptions from '../MyComponents/Subscriptions'
import Testimonials from '../MyComponents/Testimonials'
import CTA from '../MyComponents/CTA'
import Footer from '../MyComponents/Footer'


function Home() {
  
  return (
    <div className='h-full'>
      <Hero />
      <Partners />
      <Solutions />
      <Experience />
      <Implement />
      <Subscriptions />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home