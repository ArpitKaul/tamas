import React from 'react'
import Navbar from './Componenta/Navbar'
import Home from './Componenta/Home'
import About from './Componenta/About'
import Chracters from './Componenta/Chracters'
import Gallery from './Componenta/Gallery'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Chracters/>  
      <Gallery/>
    </div>
  )
}

export default App
