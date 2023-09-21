import { useState } from 'react'
import SideNav from './Components/SideNav'
import Main from './Components/Main'
import Work from './Components/Work'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {

  return (
    <>
      <SideNav />
      <Main />
      <Work />
      <Education />
      <Projects />
      <Contact />
    </>
  )
}

export default App
