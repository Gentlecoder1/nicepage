import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home from './Pages/Home'
import Services from './Pages/Services'

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, once: false })
  }, [])

  return (
    <>
      <Services />
    </>
  )
}

export default App
