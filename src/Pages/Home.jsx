import Aos from 'aos'
import Hero from '../MyComponents/Hero'
import Partners from '../MyComponents/Partners'
import Solutions from '../MyComponents/Solutions'
import Experience from '../MyComponents/Experience'
import Subscriptions from '../MyComponents/Subscriptions'


function Home() {
  
  return (
    <div className='h-full'>
      <Hero />
      <Partners />
      <Solutions />
      <Experience />
      <Subscriptions />
    </div>
  )
}

export default Home