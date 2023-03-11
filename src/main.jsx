import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './index.css'
import { router } from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  
  </React.StrictMode>
)
