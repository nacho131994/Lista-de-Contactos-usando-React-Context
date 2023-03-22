import React from "react";
import CardContact from "./Card.jsx";
import Formulario from "./views/Formulario.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		< CardContact />
		< Formulario />
		</>
	);
};

export default Home;
