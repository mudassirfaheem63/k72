import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'  // ✅ import Link
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className='text-white'>
      {/* <Link className='  ' to='/'>Home</Link>
      <Link className='  ' to='/agence'>Agence</Link>
      <Link className=' ' to='/projects'>Projects</Link> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App