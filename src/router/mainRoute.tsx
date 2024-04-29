import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../components/layout/AuthLayout"
import LandingScreen from "../pages/auth/landing/LandingScreen"
import SignLayout from "../components/layout/SignLayout"
import Signin from "../pages/auth/landing/Signin"
import Register from "../pages/auth/landing/Register"
import MainLayout from "../components/layout/MainLayout"
import Home from "../pages/home/Home"
import PrivateRoute from "./PrivateRoute"


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
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LandingScreen />
            }
        ]
    },
    {
        path: "/",
        element: <PrivateRoute>
            <MainLayout />
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])