import React from 'react'
import { ReactDOM } from 'react-dom/client';

import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme.js'
import ScrollToTop from "./components/ScrollToTop.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChakraProvider theme={theme}>
       <BrowserRouter>
         <ScrollToTop>
          <App />
         </ScrollToTop>
      </BrowserRouter>
    </ChakraProvider>
  
)
