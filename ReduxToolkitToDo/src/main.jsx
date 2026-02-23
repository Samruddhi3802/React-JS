import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <App /> */}
   <App2/>
  </Provider>
)