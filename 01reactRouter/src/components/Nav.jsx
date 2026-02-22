import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import References from './References'

const Nav = () => {
  return (
    <BrowserRouter>
     <nav>
        <h1>Amazon</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/references">References</a></li>
        </ul>
     </nav>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/references" element={<References/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default Nav;