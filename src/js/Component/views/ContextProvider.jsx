import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [agenda, setAgenda] = useState([]);
  const [newContact, setNewContact] = useState({});
  const [contact, setContact] = useState([]);
 


  useEffect(() => {
    console.log(`newcontact`,newContact);

    fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda_n&n")
      .then((res) => res.json())
      .then((data) => {
        setAgenda(data);
      })
      .catch((err) => console.log(err));
  }, [newContact]);

  const handleCreate = () => {
    let tempContact = {
        full_name: "Nacho Muñoz",
        agenda_slug: "agenda_n&n",
        email: "nachom@gmail.com",
        phone: "7864485859",
        address: "calle victoria 22, 29384 CR, ESP",
}
    setNewContact(tempContact);
    return fetch("https://assets.breatheco.de/apis/fake/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tempContact),
    });
  };

  const handleEdit = () => {

    const editContact = fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    } )
  };

  const handleDelete = () => {};
  const store = { agenda };
  const action = { handleCreate, handleEdit, handleDelete };

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
