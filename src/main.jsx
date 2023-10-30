import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider.jsx'
import router from './Routes/Routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-7xl mx-auto'>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   </div>
  </React.StrictMode>,
)
