import React from "react";
import { Card } from "react-bootstrap";
import useStore from "../store/ContextProvider.jsx";
import Button from "react-bootstrap/Button";
import UseAnimations from "react-useanimations";
import trash from "react-useanimations/lib/trash";
import edit from "react-useanimations/lib/edit";

const ComponentCard = (props) => {
  const { action } = useStore();
  const { handleShowDelete, handleShowEdit, handleContactID } = action;

  const handleOpenEdit = () => {
    handleContactID(props.id);
    handleShowEdit(props.name, props.location, props.email, props.phone);
  };
  const handleOpenDelete = () => {
    handleContactID(props.id);
    handleShowDelete(props.name);
  }

  return (
    <>
    <div className="d-flex col-6 justify-content-center my-2">
      <Card className="Card">
        <Card.Img className="imgProfile" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="title">
            {" "}
            {props.name}
            <div>
              <Button variant="outline-light" className="mx-2" onClick={handleOpenEdit}>
                <UseAnimations animation={edit} />
              </Button>
              <Button variant="outline-light" className="mx-2" onClick={handleOpenDelete}>
                <UseAnimations
                  animation={trash}
                />
              </Button>
            </div>
          </Card.Title>
          <Card.Text>
            <i className="fa-solid fa-location-dot"></i>
            {props.location}
          </Card.Text>
          <Card.Text>
            <i className="fa-solid fa-phone"></i>
            {props.phone}
          </Card.Text>
          <Card.Text>
            <i className="fa-solid fa-envelope"></i>
            {props.email}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </>
  );
};

export default ComponentCard;
