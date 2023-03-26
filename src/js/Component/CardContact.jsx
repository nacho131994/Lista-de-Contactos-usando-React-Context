import React from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import useStore from "./views/ContextProvider.jsx";
import ComponentCard from "./ComponentCard.jsx";

const CardContact = () => {
  const Navigate = useNavigate();
  const { store } = useStore();
  const { agenda } = store;


  const handleNavigate = () => {
    Navigate("/formulario");
  };
  
  
  return (
    <>
    <div className="btnAddPeople">
      <Button variant="success" onClick={handleNavigate}>
        Add new contact
      </Button>
      </div>
      {agenda.length ? agenda.map((item) => <ComponentCard key={item.id}  id={item.id} img={'https://i.pinimg.com/originals/12/62/94/126294d19d2de8a71bab0a0b68cdbcee.jpg'} name={item.full_name} location={item.address} phone={item.phone} email={item.email}/>):null }
    </>
  );
};

export default CardContact;
