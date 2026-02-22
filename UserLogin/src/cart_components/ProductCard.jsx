import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../cart_context/cartContext'
function ProductCard(props) {
  let {cartItems, count, setCount, setCartItems, addToCart}=useContext(cartContext);
  return (
    <div className='flex-row w-1/5 p-5 m-20 border-2 border-black'>
        <img src={props.image} alt="Product image" className='h-55 w-full'/>
        <div>
            <p className='text-center p-3 font-bold'>{props.desc}</p>
            <button onClick={()=>{addToCart(props)}} className='bg-black text-white p-2 w-30 hover:cursor-pointer
            ml-11'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard