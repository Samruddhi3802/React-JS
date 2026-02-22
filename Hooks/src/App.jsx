import { useState} from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  let [count, setCount]=useState(1);
   let pr=100;
  let [price, setPrice]=useState(pr);

  useEffect(()=>{
    setPrice(pr*count);
  },[count])
  function addValue()
  {
   if(count===20) alert("More than 20 not allowed");
   else{
    /* 
    Incrementing the state multiple times in a single render cycle can lead to unexpected behavior, 
    as React batches state updates for performance reasons. 
    To ensure that the state is updated correctly, 
    you can use the functional form of setState, 
    which receives the previous state as an argument and returns the new state.
    */
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    setCount((prevCount)=>prevCount+1); 
   }
  }
  function subtractValue()
  {
    if(count===0) alert("Negative quantity not allowed");
   else{
    setCount(count-1);
   }
  }
  return (
    <>
    <h1>Counter : {count}</h1>
    <h2>Price : {price}</h2>
    <button onClick={addValue}> Add </button>
    <br/><br/>
    <button onClick={subtractValue}> Subtract </button>
    {/* <h2>Footer : {count}</h2> */}
    </>
  )
}

export default App
