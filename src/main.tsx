
// Este el que renderiza
import { StrictMode } from 'react'
import './Stylemain.css'
import { createRoot } from 'react-dom/client'
import LandingPage from './Core/Model/Landing/Index.tsx'
// import './index.css'
// import App from './App.tsx'
import Rutas from './Core/Guards/Rutas/Rustas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rutas />
    
    {/* <LandingPage /> */}
  </StrictMode>,
)
