import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import UseRef from './components/UseRef.jsx'
import PropsDrilling from './components/PropsDrilling.jsx'
import UseContext from './components/UseContext.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import ControlledLogin from './components/ControlledLogin.jsx'
import StudentControlledForm from './components/StudentControlledForm.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <App2 />
    {/* <UseRef/> */}
    {/* <PropsDrilling/> */}
    {/* <UseContext/> */}
    {/* <Signup/> */}
    {/* <Login/> */}
    {/* <ControlledLogin/> */}
    {/* <StudentControlledForm/> */}

  </StrictMode>,
)
