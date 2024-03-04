import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'
import { MealsCountContextProvider } from './context/MealsContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <GlobalStyles />
        <AuthProvider>
          <MealsCountContextProvider>
             <Routes />
          </MealsCountContextProvider>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
