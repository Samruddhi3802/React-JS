import React from 'react'
import { Layout } from './Components/Layout'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Products } from './Components/Products'
import NoMatch from './Components/NoMatch'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="products" element={<Products />}/>
          {/* <Route path="products/:id" element={<ProductDetails />}/> */}
          <Route path="*" element={<NoMatch />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}
// function ProductDetails()
// {
//     const {id}=useParams();
//     return (
//         <div>
//             <h2>Product Details for ID: {id}</h2>
//         </div>
//     )
// }
export default App
