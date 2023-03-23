//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

//import your own components
import Home from "./Component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
