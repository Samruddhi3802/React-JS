import React from 'react'
import {BrowserRouter} from 'react-router-dom'

export const Nav = () => {
  return (
    <BrowserRouter>
    <nav>
        <h1>Amazon</h1>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
    </nav>
    </BrowserRouter>
  )
}
