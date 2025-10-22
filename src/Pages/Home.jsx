import Aos from 'aos'
import Hero from '../MyComponents/Hero'
import Partners from '../MyComponents/Partners'
import Solutions from '../MyComponents/Solutions'

function Home() {
  
  return (
    <div className='h-full'>
      <Hero />
      <Partners />
      <Solutions />
    </div>
  )
}

export default Home