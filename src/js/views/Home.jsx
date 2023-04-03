import React from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import useStore from "../store/ContextProvider.jsx";
import ComponentCard from "../Component/ComponentCard.jsx";
import ModalDelete from "../Component/ModalDelete.jsx";
import ModalEdit from "../Component/ModalEdit.jsx";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading3";
import AlertDeleteAll from "../Component/AlertDeleteAll.jsx";

const Home = () => {
  const Navigate = useNavigate();
  const { store, action } = useStore();
  const { agenda } = store;
  const {setShowAlert} = action;

  const handleNavigate = () => {
    Navigate("/formulario");
  };


  const handleAlertDeleteAll = () => setShowAlert(true);

  return (
    <>
      <div className="btnAddPeople">
        <Button variant="success" onClick={handleNavigate}>
          Add new contact
        </Button>
        <p className="contactCounter">Number of contacts: {agenda.length} </p>
        <Button variant="danger" onClick={handleAlertDeleteAll}>Delete All</Button>
      </div>
      <div className="d-flex row">
      {agenda.length
        ? agenda.map((item) => (
            <ComponentCard
              key={item.id}
              id={item.id}
              img={
                "https://i.pinimg.com/originals/12/62/94/126294d19d2de8a71bab0a0b68cdbcee.jpg"
              }
              name={item.full_name}
              location={item.address}
              phone={item.phone}
              email={item.email}
            />
          ))
        : <UseAnimations animation={loading}/>}
        </div>
        <ModalEdit/>
        <ModalDelete/>
        <AlertDeleteAll/>
    </>
  );
};

export default Home;
