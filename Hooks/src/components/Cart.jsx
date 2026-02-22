import React, { useEffect } from 'react'
import {useState} from 'react'
import { useParams } from 'react-router-dom'
import { productList } from './Products'

function Cart() {
  const {id}=useParams();
  const product=productList.find((item)=> item.id===Number(id));
  let pricePerItem=product.price;
  let [quantity, setQuantity] = useState(1);
  let [totalPrice, setTotalPrice] = useState(pricePerItem);


  let addQuantity=()=>{
   if(quantity==10)
    alert("No more quantity allowed")
   else{
    setQuantity((prev)=>prev+1);
   }
  }

  let subtractQuantity=()=>{
    if(quantity==0)
    alert("Negative quantity allowed")
   else{
    setQuantity((prev)=>prev-1);
   }
  }

  useEffect(()=>{
     setTotalPrice(pricePerItem*quantity);
  },[quantity])

  return (
    <>
    <div className='flex gap-5 justify-center m-20'>
        <button className='bg-black text-2xl w-10 text-white px-2 py-1 rounded-md'
        onClick={subtractQuantity}>-</button>
        <h2 className='text-3xl font-bold'>{quantity}</h2>
        <button className='bg-black text-2xl w-10 text-white px-2 py-1 rounded-md'
        onClick={addQuantity}>+</button>
    </div>
    <h2 className='text-3xl text-center font-bold'>Total Quantity: {quantity}</h2>
    <br/>
    <h2 className='text-3xl text-center font-bold'>Total Price: {totalPrice}</h2>
    </>
  )
}

export default Cart