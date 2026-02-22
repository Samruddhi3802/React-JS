import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../cart_context/cartContext'
function CartPage() {
  let {cartItems, removeFromCart}=useContext(cartContext);
  return (
    <div className='flex flex-col items-center m-10'>
      {cartItems.length==0?(
        <h2 className='text-2xl font-bold'>Cart is Empty</h2>
      ):(
        <>
        <h2 className='text-2xl font-bold'>Cart Items</h2>
        <div className='grid grid-cols-3 m-8 gap-20 '>
          {
            cartItems.map((item)=>(
              <div key={item.id} className='border-2 border-black p-5'>
                <img src={item.image} alt="Product Image" className='h-55 w-full'/>
                <p className='font-bold text-2xl text-center p-3'>{item.desc}</p>
                <button onClick={()=>{removeFromCart(item)}} className='bg-black text-white p-2 hover:cursor-pointer
            mx-14'>Remove from Cart</button>
              </div>
            ))
          }
        </div>
        </>
      )}
    </div>
  );
}

export default CartPage