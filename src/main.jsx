import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createTheme, MantineProvider } from '@mantine/core';
import './index.css'
// core styles are required for all packages
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';


const theme = createTheme({
  colorScheme: 'light',
  primaryColor: 'dark-blue',
  colors: {
    'dark-blue': [
      '#F0F4FF', // Lightest shade
      '#D1DAFF',
      '#B3BFFF',
      '#94A5FF',
      '#5767A6',
      '#0D1759', // Primary color
      '#0D1759', 
      '#060C3D', 
      '#040833', 
      '#02051C', // Darkest shade
    ],
  },
  fontFamily: 'Helvetica Neue, Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Mistle, Greycliff CF, sans-serif' },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
