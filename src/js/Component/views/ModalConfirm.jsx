
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
import useStore from './ContextProvider.jsx';


const ModalConfirm = (props) => {
  
  const Navigate = useNavigate();
  const {store} = useStore();
  const { action } = useStore() 
  const { show} = store;
  const { handleShow, setConfirmDelete, setShow } = action;

  const handleNot= () => {
    setShow(false);
    setConfirmDelete(false);
    Navigate("/");
    };
  const handleYes = () => {
    setShow(false)
    setConfirmDelete(true);
    Navigate("/");
  }

  return (
    <>
    <Button><i className="fa-regular fa-trash-can" onClick={()=>handleShow(props.id)}></i></Button>
      <Modal show={show} onHide={handleNot}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNot}>
            Close
          </Button>
          <Button variant="primary" onClick={handleYes}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirm;