import React, { createContext, useContext, useState, useEffect } from "react";


const Context = createContext();



export const ContextProvider = ({children}) => {

    const [agenda, setAgenda] = useState('https://assets.breatheco.de/apis/fake/contact/agenda/nicoNachoAgenda')
    
    useEffect(()=>{
        fetch(agenda),{
	method: 'POST', 
	mode: 'cors', 
	redirect: 'follow',
	headers: new Headers({
		'Content-Type': 'text/plain'
}).then((res)=>console.log(`res post`,res))
        }
        .then((res) => res.json())
        .then((data) => {
            setAgenda(data)
            console.log(`data`,data)
        })
        .catch((err) => console.log(err))
    },[])

    
    return (
        <>
        <Context.Provider >
            {children}
        </Context.Provider>
    </>)
}

const useStore = () => {
    return useContext(Context);
  };

  export default useStore;