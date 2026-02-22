import React from 'react'
import s from './CSSImplementation.css'
// import image from '../assets/girl_img.jpg'

export const CSSImplementation = () => {
    let styling={
        height:"200px",
        width:"200px",
        backgroundColor:"yellow"
    }
  return (
    <>
    <h1 style={{color:"red", fontFamily:'cursive'}}>Hellooo</h1>
    <div style={styling}></div>
    <p style={s}>Lorem ipsum dolor sit amet.</p>
    {/* <img src={image}></img> */}
    </>
  )
}
