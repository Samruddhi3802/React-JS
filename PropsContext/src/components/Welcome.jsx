import React from 'react'

function Welcome({name="Guest", age, city, array, obj, handleClick}) {
    let divStyle={
        border:"1px solid white",
        padding:"10px",
        margin:"10px",
    }
  return (
    <>
    <div style={divStyle}>
    <h3>Welcome {name}</h3>
    <h3>Age : {age}</h3>
    <h3>City : {city}</h3>
    <h3>Array : {array}</h3>
    <h3>Object (Course): {obj.course}</h3>
    <h3>Object (Duration): {obj.duration}</h3>
    <button onClick={handleClick}>Click me</button>
    </div>
    </>
  )
}

export default Welcome;