
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Home/Donation/Donation";
import Statistics from "../Pages/Home/Statistics/Statistics";
import ShowDetails from "../Pages/Home/ShowCard/ShowDetails";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            loader:()=> fetch('/Donation.json'),
            element:<Home></Home>
        },
        {
            path:"/donation",
            element:<Donation></Donation>
        },
        {
            path:"/statistic",
            element:<Statistics></Statistics>
        },
        {
          path:"/card/:id",
          loader:()=> fetch('/Donation.json'),
          element:<ShowDetails></ShowDetails>,
         
        }
      ]
    },
  ]);

  export default router