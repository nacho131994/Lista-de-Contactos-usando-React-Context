import React from "react";
import { Card } from "react-bootstrap";
import useStore from "./views/ContextProvider.jsx";
import UseAnimations from "react-useanimations";
import trash from "react-useanimations/lib/trash";
import edit from "react-useanimations/lib/edit";

import ModalConfirm from "./views/ModalConfirm.jsx";
import ModalEdit from "./ModalEdit.jsx";



const ComponentCard = (props) => {

    const {action} = useStore();
    const {handleShow, handleShowEdit} = action;


    return(
        <>
        <Card className="Card">
        <Card.Img
          className="imgProfile"
          variant="top"
          src={props.img}
        />
        <Card.Body>
          <Card.Title className="title"> {props.name}
            <div>
              <ModalEdit id={props.id}><UseAnimations animation={edit} onClick={handleShowEdit}/></ModalEdit>
              <ModalConfirm id={props.id}><UseAnimations animation={trash} onClick={handleShow}/></ModalConfirm>
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
    )
}

export default ComponentCard;