import React from 'react'
import {NavLink} from 'react-router-dom'
import CartPage from './CartPage'
import { cartContext } from '../cart_context/cartContext'
import { useContext } from 'react'
function Navbar() {
  let {cartItems}=useContext(cartContext);
  return (
    <nav className='flex justify-between p-10 bg-black text-white text-2xl h-25 items-center'> 
        <NavLink to="/cart">Cart</NavLink>
        <h2>Cart Items {cartItems.length}</h2>
    </nav>
  )
}
export default Navbar