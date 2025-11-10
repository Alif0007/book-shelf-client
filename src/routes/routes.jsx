import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import home from '../pages/home'
import allBooks from "../pages/allBooks";
import addBook from "../pages/addBook";
import myBooks from "../pages/myBooks";


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
                    Component: addBook
                },
                {
                    path: '/mybooks',
                    Component: myBooks
                },


            ]

        }
    ]
)

export default router