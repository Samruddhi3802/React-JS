import React from 'react'

function Cart(props) {
  return (
    <div className='flex flex-col h-50 w-40 items-center border-2 border-black'>
    <img src={props.val.img}/>
    <h2>{props.val.name}</h2>
    <h3>{props.val.cname}</h3>
    <p>{props.val.price}</p>
    </div>
  )
}

export default Cart