import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/login'
import HomePage from './pages/home'
import './css/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
)
