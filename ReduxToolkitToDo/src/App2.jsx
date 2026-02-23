import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ThemeChange from './components/ThemeChange'

function App2() {
  const theme=useSelector((state)=>state.theme.theme);

  return (
    <div className={theme==="light"?"bg-white text-black min-h-screen":"bg-black text-white min-h-screen"}>
        <ThemeChange/>
    </div>
  )
}

export default App2