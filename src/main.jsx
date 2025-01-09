import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routes.jsx'
import CartContext from './CartContext/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartContext>
    <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
 </StrictMode>
  </CartContext>,
)
