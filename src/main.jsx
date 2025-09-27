import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tableros from './Tableros.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tableros />
  </StrictMode>,
)
