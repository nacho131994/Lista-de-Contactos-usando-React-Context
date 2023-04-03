import React from "react";
import useStore from "../store/ContextProvider.jsx";
import  Modal  from "react-bootstrap/Modal";
import  Button from "react-bootstrap/Button";

const AlertDeleteAll = () =>{

    const {store, action} = useStore();
    const {handleDeleteAll, setShowAlert} = action;
    const {showAlert} = store;

    const handleClose = () => setShowAlert(false);

    return(
        <>
        <Modal show={showAlert} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure about this action?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleDeleteAll}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default AlertDeleteAll;