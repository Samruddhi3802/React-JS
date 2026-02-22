import React from 'react'
import ThemeContext from '../Context/ThemeContext'
import { useContext } from 'react'

function Navbar() {
    const {toggleFunction} = useContext(ThemeContext);
    return (<button onClick={toggleFunction}>Toggle Theme</button>)
}

export default Navbar