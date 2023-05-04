import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main/Main";
import Login from "../pages/Login/Login";
import Header from "../pages/Shared/Header/Header";
import Register from "../pages/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import Recipes from "../pages/Recipes/Recipes";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Header />,
            },
            {
                path: 'blog',
                element: <Blogs />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: 'recipes/:id',
        element: <PrivetRoutes><Recipes /></PrivetRoutes>,
        loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`)
    }
])

export default router;