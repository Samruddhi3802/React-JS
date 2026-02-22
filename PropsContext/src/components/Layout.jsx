import React from 'react'
import Navbar from './Navbar.jsx'

function Layout({theme, toggleFunction}) {
  return (
    <Navbar theme={theme} toggleFunction={toggleFunction}/>
  )
}

export default Layout