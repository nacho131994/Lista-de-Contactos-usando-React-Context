import React from "react";
import Button from "react-bootstrap/Button";


const Formulario = () => {
    return (
        <>
        <h1>Add a new contact</h1>
            <form>
                <span>Full Name</span>
                  <div class="input-group mb-3">

                      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                <span>Email</span>
                  <div class="input-group mb-3">

                      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

                  </div>
                <span>Phone</span>
                  <div class="input-group mb-3">

                      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                <span>Adress</span>
                  <div class="input-group mb-3">

                      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
            </form>
            <Button variant="primary">Send</Button>
            <p>Or go back to contacts</p>
        </>

    )
};

export default Formulario; 