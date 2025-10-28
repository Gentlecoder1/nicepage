import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, once: false })
  }, [])

  return (
    <>
      {/* <Home />
      <Services /> */}
      <About />
    </>
  )
}

export default App
