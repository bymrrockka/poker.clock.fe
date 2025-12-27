import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {StrictMode} from "react";
import {Dashboard} from "./pages/dashboard/Dashboard.jsx";
import {alpha, createTheme, ThemeProvider} from "@mui/material";
import {GameDetails} from "./pages/game/GameDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Dashboard
    }, {
        path: "/dashboard",
        Component: Dashboard
    }, {
        path: "/game/:id",
        Component: GameDetails,
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
