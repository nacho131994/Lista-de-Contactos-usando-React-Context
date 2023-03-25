import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";


const Formulario = () => {

    const Navigate = useNavigate();

    const handleNavigate = ()=>{
        Navigate('/');
    }

    return (
        <>
        <h1>Add a new contact</h1>
            <form>
                <span>Full Name</span>
                  <div className="input-group mb-3">

                      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                <span>Email</span>
                  <div className="input-group mb-3">

                      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

                  </div>
                <span>Phone</span>
                  <div className="input-group mb-3">

                      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                <span>Adress</span>
                  <div className="input-group mb-3">

                      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
            </form>
            <Button variant="primary">Send</Button>
            <p onClick={handleNavigate}>Or go back to contacts</p>
        </>

    )
};

export default Formulario; 