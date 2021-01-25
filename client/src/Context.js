import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  );
};

export const globalContext = () => {
  return useContext(AppContext);
} 

export { AppContext, AppProvider };