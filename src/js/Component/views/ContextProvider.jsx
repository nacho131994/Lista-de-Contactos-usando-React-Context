import React, { createContext, useContext, useState, useEffect } from "react";



const Context = createContext();



export const ContextProvider = ({children}) => {
    const [agenda, setAgenda] = useState([])
    const store = { agenda };

    
    useEffect(()=>{
        fetch('https://assets.breatheco.de/apis/fake/contact/agenda/agenda_n&n')
        .then((res) => res.json())
        .then((data) => {
            setAgenda(data)
        })
        .catch((err) => console.log(err))
    },[])

    const handleAddContact = () => {


    }
    
    return (
        <>
        <Context.Provider value={{store}} >
            {children}
        </Context.Provider>
    </>)
}

const useStore = () => {
    return useContext(Context);
  };

  export default useStore;