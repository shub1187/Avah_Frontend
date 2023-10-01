// CustomerContext.js
import React, { createContext, useState, useContext } from 'react';

const CustomerContext = createContext();

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};

export const CustomerProvider = ({ children }) => {
  const [customerStatus, setCustomerStatus] = useState('Update Your Profile');

  const updateCustomerStatus = (status) => {
    setCustomerStatus(status);
  };

  return (
    <CustomerContext.Provider value={{ customerStatus, updateCustomerStatus }}>
      {children}
    </CustomerContext.Provider>
  
  
  );
};

// Create a context
const CityContext = createContext();

// Create a context provider component
export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("fuck you"); // Initialize with an empty string

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  return useContext(CityContext);
};