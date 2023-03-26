import React, { createContext, useContext, useState, useEffect } from "react";
import { URL_AGENDA, URL_CONTACT } from "./Fetchs.jsx";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [agenda, setAgenda] = useState([]);
  const [newContact, setNewContact] = useState({});
  const [fullName, setFullName] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');

  
  
  const handleCreate = () => {
    let tempContact = {
      full_name : fullName,
      agenda_slug: "agenda_n&n",
      email: userEmail,
      phone: userPhone,
      address: userAddress
    };
    setNewContact(tempContact);
    return  fetch(`${URL_CONTACT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempContact),
    });
  };
  
  const handleEdit = (contact_id) => {
    return fetch(`${URL_CONTACT}${contact_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  
  const handleDelete = (contact_id) => {
    return fetch(`${URL_CONTACT}${contact_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  const createFullName = (event) => setFullName(event.target.value);
  const createAddress = (event) => setUserAddress(event.target.value)
  const createEmail = (event) => setUserEmail(event.target.value);
  const createPhone = (event) => setUserPhone(event.target.value);
  const store = { agenda };
  const action = { handleCreate, handleEdit, handleDelete, createFullName, createAddress, createEmail,createPhone };
  
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
