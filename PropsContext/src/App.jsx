import { useState, useEffect, useMemo } from 'react'
import Welcome from './components/Welcome.jsx'
import './App.css'
import SpecialProp from './components/SpecialProp.jsx';
import Layout from './components/Layout.jsx';
import ThemeContext from './Context/ThemeContext.js';
import Navbar from './ContextComponents/Navbar.jsx';
import Profile from './ContextComponents/Profile.jsx';

function App() {
   let showAlert=()=>{
    alert("Button Clicked");
   }

   let [theme, setTheme]=useState("light");

   let toggleFunction=()=>{
     setTheme(theme==="light"?"dark":"light");
   }
   
   useEffect(()=>{
     document.body.style.backgroundColor=theme==="light"?"white":"black";
     document.body.style.color=theme==="light"?"black":"white";
   }, [theme]);
 
   let value=useMemo(()=>{
    return {theme, toggleFunction}
   }, [theme]);

  return (
    <>
    <div>
     {/* <Welcome name="Samruddhi" age={18} city="Pune" array={[1,2,3,4]} 
      obj={{course:"React JS", duration:"2 months"}} 
      handleClick={showAlert}/>

      <Welcome name="Janhavi" age={21} city="Kolhapur" array={[5,6,7,8]}
       obj={{course:"React JS", duration:"2 months"}}
       handleClick={showAlert}
      />

      <SpecialProp>
        <h2>Hello Special Prop</h2>
        <p>Special Prop is a component that can accept children.</p>
      </SpecialProp> */}

      {/* <Layout theme={theme} toggleFunction={toggleFunction}/> */}
    </div>
    <ThemeContext.Provider value={value}>
       <Navbar/>
       <Profile/>
    </ThemeContext.Provider>
    </>
  )
}

export default App
