import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from './providers/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import "@fontsource/montserrat"; 
import "@fontsource/bebas-neue/400.css"; 
import theme from '../theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
