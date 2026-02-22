import React from 'react'
import Product from './Product'
import img1 from '../assets/image1.webp'
import img2 from '../assets/image2.webp'
import img3 from '../assets/image3.webp'
import img4 from '../assets/image4.webp'
import img5 from '../assets/image5.webp'
import img6 from '../assets/image6.webp'

export const productList = [
        { id: 1, name: 'Cotton Summer Saree', price: 499, img: img1},
        { id: 2, name: 'Casual White Sneakers', price: 899, img: img2},
        { id: 3, name: 'Bluetooth Earbuds', price: 1299, img: img3},
        { id: 4, name: 'Printed Cotton Kurti', price: 350, img: img4},
        { id: 5, name: 'Smart Watch Pro', price: 2499, img: img5},
        { id: 6, name: 'Leather Slim Wallet', price: 299, img: img6},
      ];
function Products() {

  return (
    <>
    <div className='flex flex-col items-center justify-center gap-10'>
    <h1 className='text-5xl font-bold mt-10'>Products</h1>
    <div className='grid grid-cols-3 gap-20 m-5'> 
    {
        productList.map((product)=><Product p={product} key={product.id}/>)
    }
    </div>
    </div>
    </> 
  )
}

export default Products