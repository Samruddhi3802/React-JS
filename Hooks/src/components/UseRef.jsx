import React, { useRef, useState } from 'react'

function UseRef() {
    let inputRef=useRef();
    const [user, setUser]=useState("");

    function handleChange()
    {
        setUser(inputRef.current.value);
    }
    function handleSubmit()
    {
        setUser(`Hello ${inputRef.current.value}`);
    }
  return (
    <div>
    <input type='text' ref={inputRef} placeholder='Enter your name' onChange={handleChange}/>
    <input type='text' placeholder="Enter your password"/>
    <button className='bg-black text-white px-4 py-2' onClick={handleSubmit}>Submit</button>
    <h2>{user}</h2>
    </div>
  )
}

export default UseRef