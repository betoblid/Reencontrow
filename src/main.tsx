import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './router/'
import { Toaster } from "sonner"

ReactDOM.createRoot(document.getElementById('view')!).render(
  <React.StrictMode>
    <Toaster  richColors/>
    <Root />
  </React.StrictMode>,
)
