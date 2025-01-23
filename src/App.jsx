import './App.scss'
import './_var.scss'
import HeroContent from './components/heroContent'
import MeuHeader from './components/header'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import MinhasSkills from './components/mySkills'
import AboutMe from './components/aboutMe'
function App() {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    })
  })

  return (
    <>
      <MeuHeader />
      <HeroContent />
      <MinhasSkills />
      <AboutMe />
    </>
  )
}

export default App;
