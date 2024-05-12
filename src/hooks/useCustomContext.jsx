// CustomerContext.js
import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const useCustomerContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [open,setOpen] = useState({})
  const [subListopen,setSubListOpen] = useState({})

  //HANDLE MENU
  const onChange = (listIndex)=>setOpen((prev)=>{
    console.log(listIndex)
      setSubListOpen({})
      const updatedOpen = {}
      updatedOpen[listIndex] = !prev[listIndex] //TOGGLE CLICKED BUTTON

      Object.keys(prev).forEach((key)=>{
          if(Number(key)!==listIndex) updatedOpen[key] = false
      })
      return updatedOpen
  })

  //HANDLE SUBMENU
  const subItemOnChange = (subListIndex)=>setSubListOpen((prev)=>{
    console.log(subListIndex)

      const updatedOpen = {}
      updatedOpen[subListIndex] = !prev[subListIndex] //TOGGLE CLICKED BUTTON

      Object.keys(prev).forEach((key)=>{
          if(Number(key)!==subListIndex) updatedOpen[key] = false
      })
      return updatedOpen

  })

  return (
    <GlobalContext.Provider value={{subItemOnChange ,onChange, open, subListopen}}>
      {children}
    </GlobalContext.Provider>
  
  
  );
};

// Create a context
const CityContext = createContext();

// Create a context provider component
export const CityProvider = ({ children }) => {
  const [city, setCity] = useState(""); // Initialize with an empty string

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  return useContext(CityContext);
};