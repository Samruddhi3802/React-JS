import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product(props) {
  const navigate=useNavigate();
  return (
    <div className='flex flex-col items-center h-full w-50 p-2 border-2 border-black'>
        <img src={props.p.img} alt={props.p.name} className='h-50 w-50 object-fit'/>
        <h2>{props.p.name}</h2>
        <p>{props.p.price}</p>
        <button className='bg-black text-white px-4 py-2' onClick={()=>{navigate(`/cart/${props.p.id}`)}}>Add to Cart</button>
    </div>
  )
}

export default Product