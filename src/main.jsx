import 'core-js/stable'; // Полностью включает все полифиллы
import 'regenerator-runtime/runtime'; // Полифилл для async/await

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
