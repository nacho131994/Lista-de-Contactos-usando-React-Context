
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
import UseAnimations from 'react-useanimations';
import useStore from './ContextProvider.jsx';
import trash from 'react-useanimations/lib/trash';


const ModalConfirm = (props) => {

  
  const Navigate = useNavigate();
  const {store} = useStore();
  const { action } = useStore() 
  const { show} = store;
  const { handleShow, setConfirmDelete, setShow, handleDelete } = action;

  const handleNot= () => {
    setShow(false);
    setConfirmDelete(false);
    Navigate("/");
    };
  const handleYes = (props) => {
    setShow(false)
    setConfirmDelete(true);
    handleDelete(props.id)
    Navigate("/");
  }

  return (
    <>
    <Button className='btn-light'><UseAnimations animation={trash} onClick={()=>handleShow(props.id)}/></Button>
      <Modal show={show} onHide={handleNot}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>Delete</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>handleYes(props)}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleNot}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirm;