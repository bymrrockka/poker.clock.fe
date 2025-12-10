import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import {StrictMode} from "react";
import {Dashboard} from "./pages/dashboard/Dashboard.jsx";
import {alpha, createTheme, ThemeProvider} from "@mui/material";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    }, {
        path: "/dashboard",
        element: <Dashboard/>
    }
])

export const OVERLAY_ALPHA = 0.16

const theme = createTheme({
    colorSchemes: {
        dark: true
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: `linear-gradient(${alpha('#fff', OVERLAY_ALPHA)}, ${alpha('#fff', OVERLAY_ALPHA)})`
                }
            }
        }
    }
})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </StrictMode>
)
