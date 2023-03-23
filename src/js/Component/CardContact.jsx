import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";

const CardContact = () => {

  const Navigate = useNavigate();

  const handleNavigate = ()=>{

    Navigate('/formulario');
  }

  return (
    <>
      <Button variant="success" onClick={handleNavigate}>Add new contact</Button>

      <Card className="Card">
        <Card.Img
          className="imgProfile"
          variant="top"
          src="https://i.pinimg.com/originals/12/62/94/126294d19d2de8a71bab0a0b68cdbcee.jpg"
        />
        <Card.Body>
          <Card.Title className="title">Card Title
          <div className=" iconos">
              <i className="fa-solid fa-pencil"></i>
              <i className="fa-regular fa-trash-can"></i>
              </div>
          </Card.Title>
          <Card.Text>
            <div className="info">
              <p>
                <i className="fa-solid fa-location-dot"></i>
              </p>
              <p>
                <i className="fa-solid fa-phone"></i>
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>
              </p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardContact;
