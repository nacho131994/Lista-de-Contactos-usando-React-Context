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
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [contactID, setContactID] = useState()


  const getAgenda = () => {
    return(
  fetch(URL_AGENDA)
    .then((res) => res.json())
    .then((data) => {
      setAgenda(data);
    })
    .catch((err) => console.log(err))
)}
  const handleContactID = (id)=> setContactID(id);
  const handleCreate = async () => {
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
    })
    .then(res => getAgenda())
    .catch(err => console.log(err));
  };

  const handleEdit = async () => {
    let editContact = {
      id: contactID,
      full_name: fullName,
      email: userEmail,
      phone: userPhone,
      address: userAddress,
    };
    return fetch(`${URL_CONTACT}${contactID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editContact),
    }).then(res=> getAgenda());
  };
  const handleShowDelete = (name) => {
    setShowDelete(true);
    setFullName(name)
  }
  const handleShowEdit = (name, location, email,phone) => {
    setFullName(name);
    setUserAddress(location);
    setUserPhone(phone);
    setUserEmail(email);
    setShowEdit(true);
  }

  const handleDelete = async () => {
    return (
       fetch(`${URL_CONTACT}${contactID}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }).then(res => getAgenda())
        .catch(err => console.log(err))
  )};

  const handleDeleteAll = async () =>{
    return (
       fetch(`${URL_AGENDA}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }).then(res => getAgenda())
        .catch(err => console.log(err))
  )};

  const createFullName = (event) => setFullName(event.target.value);
  const createAddress = (event) => setUserAddress(event.target.value);
  const createEmail = (event) => setUserEmail(event.target.value);
  const createPhone = (event) => setUserPhone(event.target.value);
  const store = { agenda, showDelete, showEdit, userPhone, userAddress, fullName, userEmail, contactID };
  const action = {
    handleContactID,
    handleCreate,
    handleEdit,
    handleDelete,
    handleShowEdit,
    handleShowDelete,
    createFullName,
    createAddress,
    createEmail,
    createPhone,
    setShowDelete,
    setShowEdit,
    getAgenda,
    handleDeleteAll
  };

  useEffect(() => {
    getAgenda();
  }, [newContact]);

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
