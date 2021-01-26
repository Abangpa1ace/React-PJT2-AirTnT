import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navFixed, setNavFixed] = useState(true);
  const [guest, setGuest] = useState(2);
  const [restList, setRestList] = useState(new Array(4));

  const handleNavFixed = () => {
    const { pageYOffset } = window;
    const isFixed = pageYOffset > 10;
    setNavFixed(isFixed);
  }

  return (
    <AppContext.Provider
      value={{
        navFixed,
        setNavFixed,
        handleNavFixed,
        guest,
        setGuest,
        restList,
        setRestList,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Context is not finded.');
  }
  return context;
} 

export { AppContext, AppProvider };