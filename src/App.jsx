import React from 'react'
import { Navbar, Home, Skills, Bio, Project, Contact, Footer } from './Component'
import FloatingCursor from './Component/FloatingCursor'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <Bio/>
    <Project/>
    <Contact/>
    <Footer/>
    <FloatingCursor/>
    </>
  )
}

export default App
