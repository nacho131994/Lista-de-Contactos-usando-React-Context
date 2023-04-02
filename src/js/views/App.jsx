import React from "react";
import { RouterProvider } from "react-router";
import { ContextProvider } from "../store/ContextProvider.jsx"; 
import { router } from "../routes/router.js";


//create your first component
const App = ({children}) => {
  return (
    <div>
      <ContextProvider>
        <RouterProvider router={router}>
          {children}
        </RouterProvider>
      </ContextProvider>
    </div>
  );
};
export default App;
