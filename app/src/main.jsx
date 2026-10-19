import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { CartPrivider } from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartPrivider>
        <App />
      </CartPrivider>
    </BrowserRouter>
  </StrictMode>,
)
