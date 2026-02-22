import React from 'react'

export const ConditionalRendering = () => {
  let username="admin";
  let pass=123;
  if(username==="admin" && pass===123)
    return <Success/>
  else
    return <Failure/>
}

function Success(){
    return <h1>Logged In Successfully</h1>
}

function Failure()
{
    return <h1>Invalid Credentials</h1>
}
