import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home.jsx";
import Formulario from "../views/Formulario.jsx";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/formulario',
        element:<Formulario/>
    }
])