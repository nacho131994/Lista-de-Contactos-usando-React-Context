import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import useStore from "./views/ContextProvider.jsx";

const CardContact = () => {
  const Navigate = useNavigate();
  const { store } = useStore();

  const { agenda } = store;

  console.log(`agenda`, agenda);

  const handleNavigate = () => {
    Navigate("/formulario");
  };



  return 
  (
    <>
    <div className="btnAddPeople">
      <Button variant="success" onClick={handleNavigate}>
        Add new contact
      </Button>
      </div>
      <Card className="Card">
        <Card.Img
          className="imgProfile"
          variant="top"
          src="https://i.pinimg.com/originals/12/62/94/126294d19d2de8a71bab0a0b68cdbcee.jpg"
        />
        <Card.Body>
          <Card.Title className="title">
            {agenda.length ? agenda.map((item) => item.full_name) : "loading.."}
            <div>
              <i className="fa-solid fa-pencil"></i>
              <i className="fa-regular fa-trash-can"></i>
              </div>
          </Card.Title>
          <Card.Text>
            <i className="fa-solid fa-location-dot"></i>
            {agenda.length ? agenda.map((item) => item.address) : "loading.."}
          </Card.Text>
          <Card.Text>
            <i className="fa-solid fa-phone"></i>
            {agenda.length ? agenda.map((item) => item.phone) : "loading.."}
          </Card.Text>
          <Card.Text>
            <i className="fa-solid fa-envelope"></i>
            {agenda.length ? agenda.map((item) => item.email) : "loading.."}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardContact;
