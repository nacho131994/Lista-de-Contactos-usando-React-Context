import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import useStore from "../store/ContextProvider.jsx";
import Form from "react-bootstrap/Form";

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
  const handleHome = () => Navigate("/");

  return (
    <>
      <Form className="w-50 mx-auto mt-4 form">
        <Form.Text className="titleForm">Add a New Contact</Form.Text>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            type="text"
            placeholder="fullname"
            onChange={createFullName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.domain"
            onChange={createEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            onChange={createPhone}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            onChange={createAddress}
          />
        </Form.Group>
        <Form.Group className="mx-auto d-flex justify-content-around">
      <Button variant="success" onClick={handleNavigate}>
        ADD
      </Button>
      <Button variant="primary" onClick={handleHome}>
        Cancel
      </Button>

        </Form.Group>
      </Form>
    </>
  );
};

export default Formulario;
