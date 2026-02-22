import React from 'react'
import { createContext, useContext } from 'react';
let myContext=createContext()
function UseContext() {
    let user={
        name:"Samruddhi",
        age:18
    }
  return (
    <myContext.Provider value={user}>
        <Fun1/>
    </myContext.Provider>
  )
}

function Fun1()
{
    return(
        <Fun2/>
    )
}

function Fun2()
{
    return(
        <Fun3/>
    )
}

function Fun3()
{
    let user=useContext(myContext)
    return(
        <div>
           <h2>Name : {user.name}</h2>
           <h2>Age : {user.age}</h2>
        </div>
    )
}

export default UseContext;