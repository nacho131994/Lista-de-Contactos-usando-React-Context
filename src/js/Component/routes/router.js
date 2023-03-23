import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CardContact from "../CardContact.jsx";
import Formulario from "../views/Formulario.jsx";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<CardContact/>
    },
    {
        path:'/formulario',
        element:<Formulario/>
    }
])