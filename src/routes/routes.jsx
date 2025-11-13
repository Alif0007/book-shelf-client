import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import home from '../pages/home'
import allBooks from "../pages/allBooks";
import AddBook from "../pages/addBook";
import MyBooks from "../pages/myBooks";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../pages/BookDetails";
import UpdateBookPage from "../pages/UpdateBookPage"
import ErrorPage from "../pages/error404";


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
                    element: <PrivateRoute><MyBooks></MyBooks></PrivateRoute>
                },
                {
                    path: '/bookdetails/:id',
                    element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                    loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`)
                },
                {
                    path: '/update-book/:id',
                    element: <PrivateRoute><UpdateBookPage></UpdateBookPage>  </PrivateRoute>,
                    loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`)
                },
                {
                    path: '/login',
                    Component: LoginPage
                },
                {
                    path: '/register',
                    Component: RegisterPage
                },
                {
                    path: "/*",
                    element: <ErrorPage></ErrorPage>
                }



            ]

        }
    ]
)

export default router