import React from 'react'
import Cart from './Cart'

function Products() {
let products=[
    {
        name:"watch",
        cname:"titan",
        price:2000,
        img:""
    },
    {
        name:"mobile",
        cname:"Apple",
        price:200000,
        img:""
    },
    {
        name:"earpods",
        cname:"Apple",
        price:20000,
        img:""
    },
    {
        name:"iron",
        cname:"Bajaj",
        price:2500,
        img:""
    }
]
  return (
    <div className='flex gap-5 m-20 justify-center'>
    {
        products.map((product)=><Cart val={product}/>)
    }
    </div>
  )
}

export default Products