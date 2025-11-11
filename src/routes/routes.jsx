import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import home from '../pages/home'
import allBooks from "../pages/allBooks";
import AddBook from "../pages/addBook";
import myBooks from "../pages/myBooks";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter(

    [
        {
            path: '/',
            Component: Root,
            children: [
                {
                    path: '/',
                    Component: home,
                    loader: () => fetch("http://localhost:3000/topbooks")
                },
                {
                    path: '/allBooks',
                    Component: allBooks
                },
                {
                    path: '/addbook',
                    element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
                },
                {
                    path: '/mybooks',
                    Component: myBooks
                },
                {
                    path: '/login',
                    Component: LoginPage
                },
                {
                    path: '/register',
                    Component: RegisterPage
                },



            ]

        }
    ]
)

export default router