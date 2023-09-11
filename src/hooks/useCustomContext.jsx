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