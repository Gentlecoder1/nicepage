import Aos from 'aos'
import Hero from '../MyComponents/Hero'
import Partners from '../MyComponents/Partners'
import Solutions from '../MyComponents/Solutions'
import Experience from '../MyComponents/Experience'
import Implement from '../MyComponents/Implement'
import Subscriptions from '../MyComponents/Subscriptions'
import Testimonials from '../MyComponents/Testimonials'


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
    </div>
  )
}

export default Home