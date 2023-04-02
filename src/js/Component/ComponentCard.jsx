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
    handleShowEdit();
  };
  const handleOpenDelete = () => {
    handleContactID(props.id);
    handleShowDelete();
  }

  return (
    <>
      <Card className="Card">
        <Card.Img className="imgProfile" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="title">
            {" "}
            {props.name}
            <div>
              <Button className="btn-light" onClick={handleOpenEdit}>
                <UseAnimations animation={edit} />
              </Button>
              <Button className="btn-light" onClick={handleOpenDelete}>
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
    </>
  );
};

export default ComponentCard;
