import React from 'react'

function Profile({theme}) {
  return (
    <h1 style={{color:theme==="light"?"black":"white"}}>Theme is {theme}</h1>
  )
}

export default Profile;