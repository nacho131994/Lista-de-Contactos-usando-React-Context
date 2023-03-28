import React from "react";
import { Card } from "react-bootstrap";
import useStore from "./views/ContextProvider.jsx";
import UseAnimations from "react-useanimations";
import trash from "react-useanimations/lib/trash";
import edit from 'react-useanimations/lib/edit';



const ComponentCard = (props) => {

    const {action} = useStore();
    const {handleDelete, handleEdit} = action;




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
              <UseAnimations animation={edit} onClick={()=>handleEdit(props)}/>
              <UseAnimations animation={trash} onClick={()=>handleDelete(props.id)}/>
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