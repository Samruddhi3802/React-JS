import React from 'react'
import Products from './components/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'

function App2() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart/:id' element={<Cart/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App2