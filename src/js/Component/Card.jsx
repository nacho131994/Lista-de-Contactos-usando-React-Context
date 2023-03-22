import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";


const CardContact = () => {
  return ( 
    <>
    <Button variant="success">Add new contact</Button>

      <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <div className="info">
                            <p><i className="fa-solid fa-location-dot"></i></p>
                            <p><i className="fa-solid fa-phone"></i></p>
                            <p><i className="fa-solid fa-envelope"></i></p>
                      </div>
                      <div className="iconos">
                            <p><i className="fa-solid fa-pencil"></i></p>
                            <p><i className="fa-regular fa-trash-can"></i></p>
                      </div>
                    </Card.Text>
                    
                </Card.Body>
     </Card>
     </>
            );
};

export default CardContact;