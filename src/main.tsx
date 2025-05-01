
// Este el que renderiza
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Core/Componentes/header.tsx'
// import './index.css'
// import App from './App.tsx'
import Rutas from './Core/Guards/Rutas/Rustas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rutas />,
    <Header />
    
  </StrictMode>,
)
