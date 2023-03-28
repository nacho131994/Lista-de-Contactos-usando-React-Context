import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
import UseAnimations from 'react-useanimations';
import useStore from './views/ContextProvider.jsx';
import edit from 'react-useanimations/lib/edit';


const ModalEdit = (props) => {
  
  const Navigate = useNavigate();
  const {store} = useStore();
  const { action } = useStore() 
  const { showEdit } = store;
  const { setConfirmEdit, handleShowEdit, setShowEdit, handleEdit } = action;

  const handleNot= () => {
    setShowEdit(false);
    setConfirmEdit(false);
    Navigate("/");
    };
  const handleYes = (props) => {
    setShowEdit(true)
    setConfirmEdit(true);
    handleEdit(props);
    Navigate("/");
  }

  return (
    <>
    <Button className='btn-light'><UseAnimations animation={edit} onClick={()=>handleShowEdit(props.id)}/></Button>
      <Modal show={showEdit} onHide={handleNot}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact </Modal.Title>
        </Modal.Header>
        <Modal.Body>Edit</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNot}>
            No
          </Button>
          <Button variant="primary" onClick={()=>handleYes(props)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;
