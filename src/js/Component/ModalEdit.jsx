import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useStore from '../store/ContextProvider.jsx';



const ModalEdit = () => {
  const {store} = useStore();
  const { action } = useStore() 
  const { showEdit, fullName, userEmail, userAddress, userPhone, contactID} = store;
  const { setShowEdit, handleEdit, createFullName, createEmail, createAddress, createPhone, handleContactID} = action;
  const handleNot= () => {
    setShowEdit(false);
    };

  const handleYes = () => {
    handleContactID(contactID);
    handleEdit();
    setShowEdit( prev => !prev);
  }
  return (
    <>
      <Modal show={showEdit} onHide={handleNot}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <span>Full Name ID: {contactID}</span>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={fullName}
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={createFullName}
          />
        </div>
        <span>Email</span>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={userEmail}
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={createEmail}
          />
        </div>
        <span>Phone</span>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={userPhone}
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={createPhone}
          />
        </div>
        <span>Adress</span>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={userAddress}
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={createAddress}
          />
        </div>
      </form>
        </Modal.Body>
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

export default ModalEdit;
