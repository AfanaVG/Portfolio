import React from 'react'
import ReactDOM from 'react-dom/client'
import PortfolioPage from './pages/PortfolioPage.tsx'
import './index.css'
import "./colors/_Colors.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PortfolioPage />
  </React.StrictMode>,
)
