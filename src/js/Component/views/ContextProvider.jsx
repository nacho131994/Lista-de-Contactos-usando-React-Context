import React, { createContext, useContext, useState, useEffect } from "react";
import { URL_AGENDA, URL_CONTACT } from "./Fetchs.jsx";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [agenda, setAgenda] = useState([]);
  const [newContact, setNewContact] = useState({});
  const [fullName, setFullName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [contactID, setcontactID] = useState('')


  const handleCreate = () => {
    let tempContact = {
      full_name: fullName,
      agenda_slug: "agenda_n&n",
      email: userEmail,
      phone: userPhone,
      address: userAddress,
    };
    setNewContact(tempContact);
    return fetch(`${URL_CONTACT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempContact),
    });
  };

  const handleEdit = (id) => {
    setcontactID(id)
    let editContact = {
      id: contactID,
      fullName: fullName,
      email: userEmail,
      phone: userPhone,
      address: userAddress,
    };
    return fetch(`${URL_CONTACT}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editContact),
    });
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleShowEdit = () => {
    setShowEdit(true);
  };

  const handleDelete = (contact_id) => {
       fetch(`${URL_CONTACT}${contact_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
  };

  const createFullName = (event) => setFullName(event.target.value);
  const createAddress = (event) => setUserAddress(event.target.value);
  const createEmail = (event) => setUserEmail(event.target.value);
  const createPhone = (event) => setUserPhone(event.target.value);
  const store = { agenda, show, showEdit, userPhone, userAddress, fullName, userEmail };
  const action = {
    handleCreate,
    handleEdit,
    handleDelete,
    handleShowEdit,
    handleShow,
    createFullName,
    createAddress,
    createEmail,
    createPhone,
    setShow,
    setConfirmDelete,
    setShowEdit,
  };

  useEffect(() => {
    fetch(URL_AGENDA)
      .then((res) => res.json())
      .then((data) => {
        setAgenda(data);
      })
      .catch((err) => console.log(err));
  }, [newContact, agenda]);

  return (
    <>
      <Context.Provider value={{ store, action }}>{children}</Context.Provider>
    </>
  );
};

const useStore = () => {
  return useContext(Context);
};

export default useStore;
