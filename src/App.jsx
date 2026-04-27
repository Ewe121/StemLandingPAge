import { useState } from 'react'

import Navbarli from './components/Navbar'
import Hero from './components/Hero'
import { Creativity } from './components/Creativity'
import { Join } from './components/Join'
import {DeepDiveCard}   from './components/DeepDiveCard'
import { Merchandise } from './components/Merchandise'
import { Cea } from './components/Cea'
import { Joinot } from './components/Joinot'
import { CoursePortal } from './components/CoursePortal'
import { More } from './components/More'
import { Amazing } from './components/Amazing'
import { Footer } from './components/Footer'
import { hr } from './components/hr'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbarli />
      <Hero />
      <Creativity />
      <Join />
      <DeepDiveCard />
      <Merchandise />
      <Cea />
      <Joinot />
      <CoursePortal />
      <More />
      <Amazing />
      <Footer />
      <hr className='py-9'/>
    </>
  )
}

export default App
