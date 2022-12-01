// import React from "react";
// import { ReactDOM } from "react";
// import App from "./App";

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById("root")
// )

import React from 'react'
import { createRoot } from 'react-dom/client'
import './sass/main.scss'

import MainContainer from './components/mainContainer'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AuthContextProvider } from './components/context/AuthContext'

const theme = createTheme({
  palette: {
    primary: {
      light: '#488680',
      main: '#165954',
      dark: '#002f2b',
      contrastText: '#FBF7F5'
    },
    secondary: {
      light: '#ffde95',
      main: '#f9ac66',
      dark: '#c37d39',
      contrastText: '#FBF7F5'
    }
  }
})

export default function App () {
  return (
        <>
            <div className="container">
                <ThemeProvider theme={theme}>
                    <AuthContextProvider>
                        <MainContainer />
                    </AuthContextProvider>
                </ThemeProvider>
            </div>
        </>
  )
}

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />)