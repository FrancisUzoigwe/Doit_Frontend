import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../components/layout/AuthLayout"
import LandingScreen from "../pages/auth/landing/LandingScreen"
import SignLayout from "../components/layout/SignLayout"
import Signin from "../pages/auth/landing/Signin"
import Register from "../pages/auth/landing/Register"


export const mainRoute = createBrowserRouter([
    {
        path: "/signin-account",
        element: <SignLayout />,
        children: [
            {
                index: true,
                element: <Signin />
            }
        ]
    },
    {
        path: "/create-account",
        element: <SignLayout />,
        children: [
            {
                index: true,
                element: <Register />
            }
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LandingScreen />
            }
        ]
    }
])