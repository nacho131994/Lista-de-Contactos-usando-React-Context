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
  const { showEdit, fullName, userEmail, userAddress, userPhone } = store;
  const { handleShowEdit, setShowEdit, handleEdit, setFullName, createFullName, createEmail, createAddress, createPhone } = action;

  const handleNot= () => {
    setShowEdit(false);
    };
  const handleYes = (props) => {
    handleEdit(props.id);
    setShowEdit(false);
    console.log(props.id)
  }

  return (
    <>
    <Button className='btn-light'><UseAnimations animation={edit} key={props.id} onClick={handleShowEdit}/></Button>
      <Modal show={showEdit} onHide={handleNot}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <span>Full Name</span>
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

export default ModalEdit;
