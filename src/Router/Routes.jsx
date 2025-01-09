import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.Jsx";
import Home from "../Page/Home";
import Details from "../Page/Details";
import Cart from "../Page/Cart";



 const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'details/:id',
            element:<Details></Details>
        },
        {
            path:'cart',
            element:<Cart></Cart>
        }
      ]
    },
  ]);
  export default router