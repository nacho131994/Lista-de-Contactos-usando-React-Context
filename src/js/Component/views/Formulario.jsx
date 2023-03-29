import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import useStore from "./ContextProvider.jsx";

const Formulario = () => {
  const Navigate = useNavigate();
  const { action } = useStore();
  const {
    handleCreate,
    createFullName,
    createAddress,
    createPhone,
    createEmail,
  } = action;

  const handleNavigate = () => {
    handleCreate();
    Navigate("/");
  };

  return (
    <>
      <h1>Add a new contact</h1>
      <form>
        <span>Full Name</span>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => createFullName(e)}
          />
        </div>
        <span>Email</span>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="name@example.domain"
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
            placeholder="Phone Number"
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
            placeholder="Address"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={createAddress}
          />
        </div>
      </form>
      <Button variant="primary" onClick={handleNavigate}>
        Send
      </Button>
      <p className="goBack" onClick={handleNavigate}>Or go back to contacts</p>
    </>
  );
};

export default Formulario;
