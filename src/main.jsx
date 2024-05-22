import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>

      <RouterProvider router={router} />
    </ThemeProvider>

  </React.StrictMode>,
)
