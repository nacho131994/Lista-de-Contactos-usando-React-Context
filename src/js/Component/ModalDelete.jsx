
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useStore from '../store/ContextProvider.jsx';


const ModalDelete = () => {

  const {store} = useStore();
  const { action } = useStore() 
  const { showDelete, contactID, fullName} = store;
  const {setShowDelete, handleDelete, handleContactID } = action;

  const handleNot= () => {
    setShowDelete(false);
    };
  const handleYes = () => {
    handleContactID(contactID);
    handleDelete();
    setShowDelete(res=> !res);

  }
  return (
    <>
      <Modal show={showDelete} onHide={handleNot}>
        <Modal.Header closeButton>
          <Modal.Title>Delete this Contact: {contactID}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this contact: {fullName}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleYes}>
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

export default ModalDelete;