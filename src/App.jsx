import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home from './Pages/Home'

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, once: false })
  }, [])

  return (
    <>
      <Home />
    </>
  )
}

export default App
