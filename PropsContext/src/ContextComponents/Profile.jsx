import React from 'react'
import ThemeContext from '../Context/ThemeContext'
import { useContext } from 'react'

function Profile() {
  const {theme}=useContext(ThemeContext)
  return <h1>Current Theme : {theme}</h1>
}

export default Profile