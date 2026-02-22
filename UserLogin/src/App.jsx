import { useState, useMemo } from 'react'
import { UserContextProvider} from './context/UserContext';
import Navbar from './components/Navbar.jsx'
import Dashboard from './components/Dashboard.jsx'
import './App.css'

function App() {

let [user, setUser]=useState(null);
let [isLoggedIn, setIsLoggedIn]=useState(false);

let value=useMemo(()=>{
  return {user, isLoggedIn, setUser, setIsLoggedIn}
},[user, isLoggedIn]);

  return (
    <UserContextProvider value={value}>
      <Navbar/>
      <Dashboard/>
    </UserContextProvider>
  )
}

export default App
