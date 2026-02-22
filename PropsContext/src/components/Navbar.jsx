import React from 'react'
import Profile from './Profile.jsx'
function Navbar({theme, toggleFunction}) {
  return (
    <>
    <button onClick={toggleFunction}>Toggle Theme</button>
    <Profile theme={theme}/>
    </>
  )
}

export default Navbar;