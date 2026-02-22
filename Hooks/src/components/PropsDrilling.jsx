import React from 'react'

function PropsDrilling() {
    let user={
        name:"Samruddhi",
        age:18
    }
  return (
    <Fun1 val={user}/>
  )
}

function Fun1(props)
{
    return(
        <Fun2 val={props.val}/>
    )
}

function Fun2(props)
{
    return(
        <Fun3 val={props.val}/>
    )
}

function Fun3(props)
{
    return(
        <div>
           <h2>Name : {props.val.name}</h2>
           <h2>Age : {props.val.age}</h2>
        </div>
    )
}

export default PropsDrilling