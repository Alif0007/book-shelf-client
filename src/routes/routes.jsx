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
import About from "../pages/About";
import Contact from "../pages/Contact";


const router = createBrowserRouter(

    [
        {
            path: '/',
            Component: Root,
            children: [
                {
                    path: '/',
                    Component: home,
                    loader: () => fetch("https://book-shelf-server-eight.vercel.app/topbooks")
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
                    element: <BookDetails></BookDetails>,
                    loader: ({ params }) => fetch(`https://book-shelf-server-eight.vercel.app/books/${params.id}`)
                },
                {
                    path: '/update-book/:id',
                    element: <PrivateRoute><UpdateBookPage></UpdateBookPage>  </PrivateRoute>,
                    loader: ({ params }) => fetch(`https://book-shelf-server-eight.vercel.app/books/${params.id}`)
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
                    path: '/about',
                    Component: About
                },
                {
                    path: '/contact',
                    Component: Contact
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