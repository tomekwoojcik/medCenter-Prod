import React from "react";
import { createRoot } from "react-dom/client";
import "./sass/main.scss"


import Menu from "./components/mainMenu";
import MainContainer from "./components/mainContainer";



import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from "./components/context/AuthContext";


const theme = createTheme({
    palette: {
        primary: {
            light: '#488680',
            main: '#165954',
            dark: '#002f2b',
            contrastText: '#FBF7F5',
        },
        secondary: {
            light: '#ffde95',
            main: '#f9ac66',
            dark: '#c37d39',
            contrastText: '#FBF7F5',
        },
    },
});


export default function App() {
    return (
        <>
            <div className="container">
                <ThemeProvider theme={theme}>
                    <Menu />
                    <MainContainer />

                </ThemeProvider>
            </div>
        </>
    )
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />)