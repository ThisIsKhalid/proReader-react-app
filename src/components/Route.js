import { createBrowserRouter } from "react-router-dom";
import { AboutUs } from "./AboutUs";
import BookDetails from "./BookDetails";
import Books from "./Books";
import ErrorElement from "./ErrorElement";
import Home from "./Home";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'books',
          element: <Books></Books>,
          loader: async () => {
            return fetch('https://api.itbook.store/1.0/new')
          }
        },
        {
            path: 'books/:id',
            element: <BookDetails></BookDetails>,
            loader: async ({params}) => {
                return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
            }
        },
        {
          path: 'aboutUs',
          element: <AboutUs></AboutUs>
        }
      ]
    }
  ]);

export default router;