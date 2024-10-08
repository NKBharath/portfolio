import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/about'
import Service from './components/services/service'
import MyWork from './components/MyWork/MyWork'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <MyWork/>
    </div>
  )
}

export default App