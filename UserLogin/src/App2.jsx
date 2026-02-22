import React from 'react'
import { useState, useMemo } from 'react'
import Products from './cart_components/Products'
import CartPage from './cart_components/CartPage'
import Layout from './cart_components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './cart_context/cartContext'

function App2() {
  let [cartItems, setCartItems]=useState([]);

  let addToCart=(product)=>{
    setCartItems(prev=>[...prev, product]);
  }

  let removeFromCart=(product)=>{
    setCartItems(prev=>prev.filter((item)=>item.id!==product.id));
  }

  let value=useMemo(()=>{
    return {cartItems, setCartItems, addToCart, removeFromCart};
  }, [cartItems])
  
  return (
  <CartContextProvider value={value}>
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>}>
         <Route path="" element={<Products/>}/>
         <Route path="cart" element={<CartPage/>}/>
       </Route>
     </Routes>
   </BrowserRouter>
   </CartContextProvider>
  )
}

export default App2;