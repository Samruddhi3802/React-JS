import React from 'react'
import {useDispatch} from "react-redux";
import {toggleTheme} from "../features/Theme/ThemeSlice";

function ThemeChange() {
 const dispatch=useDispatch();

 const toggleThemeHandler=()=>{
    dispatch(toggleTheme());
 }
 
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold text-center mb-4'>Theme Change Component</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleThemeHandler}>
            Toggle Theme
        </button>
    </div>
  )
}

export default ThemeChange