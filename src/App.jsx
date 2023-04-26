import React from "react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
])

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />{" "}
        </div>
    )
}

export default App
