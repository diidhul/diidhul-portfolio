import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Pengalaman from './components/Pengalaman'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-offWhite'>
      <Navbar />
      <Hero />
      <Pengalaman />
      <Project />
      <Contact />
    </div>
  )
}

export default App
