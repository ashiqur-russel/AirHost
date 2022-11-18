import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Main from "../Layout/Main";
import CommingSoon from "../Pages/Shared/ComingSoon.js";
import Details from "../Pages/Details";
import SearchResult from "../Pages/SearchResult";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/coming-soon",
        element: <CommingSoon />,
      },
      {
        path: "/service-details",
        element: <Details />,
      },
      {
        path: "/service-result",
        element: <SearchResult />,
      },
    ],
  },
]);

export default router;
