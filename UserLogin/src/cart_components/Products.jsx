import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../assets/image2.webp'
import img2 from '../assets/image3.webp'
import img3 from '../assets/image5.webp'
function Products() {
  return (
    <>
    <div className='flex'>
    <ProductCard image={img1} desc="Shoes" id={1}/>
    <ProductCard image={img2} desc="EarPods" id={2}/>
    <ProductCard image={img3} desc="SmartWatch" id={3}/>
    </div>
    </>
  )
}

export default Products