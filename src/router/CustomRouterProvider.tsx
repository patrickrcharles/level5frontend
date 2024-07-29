
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Title from "../Views/Title";
import Home from "../Views/Home";
import App from "../App";
import DrBlood from "../Views/DrBlood";
import Layout from "../Components/Layout";

export const router = createBrowserRouter([
        {
            path: "/",
            element: (
            <Layout><App/></Layout>
            ),
            children: [
                { path: "", element: <Title /> },
                { path: "/level5", element: <Home /> },
                { path: "/level5/drblood", element: <DrBlood /> },
              ],
        },
    ]);

