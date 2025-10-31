import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect, Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('./Pages/Home'))
const About = lazy(() => import('./Pages/About'))
const Services = lazy(() => import('./Pages/Services'))
const Contact = lazy(() => import('./Pages/Contact'))
import { ClimbingBoxLoader } from "react-spinners";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, once: false })
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div className="p-8 h-[100vh] flex items-center justify-center text-center"><ClimbingBoxLoader size={18} color='#CBFE33' className='m-auto' /></div>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App