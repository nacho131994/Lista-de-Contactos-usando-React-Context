import React, { createContext, useContext, useState, useEffect } from "react";



const Context = createContext();



export const ContextProvider = ({children}) => {
    const [agenda, setAgenda] = useState([])
    const [contact, setContact] = useState([])
    const store = { agenda };
    const action = { handleCreate, handleEdit, handleDelete};

    
    useEffect(()=>{
        fetch('https://assets.breatheco.de/apis/fake/contact/agenda/agenda_n&n')
        .then((res) => res.json())
        .then((data) => {
            setAgenda(data)
        })
        .catch((err) => console.log(err))
    },[])

    const handleCreate = () => {

    }

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }
    
    return (
        <>
        <Context.Provider value={{store, action}} >
            {children}
        </Context.Provider>
    </>)
}

const useStore = () => {
    return useContext(Context);
  };

  export default useStore;