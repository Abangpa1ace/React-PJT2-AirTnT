import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navFixed, setNavFixed] = useState(false);
  const [location, setLocation] = useState('');
  const [dateIn, setDateIn] = useState(null);
  const [dateOut, setDateOut] = useState(null);
  const [guest, setGuest] = useState(0);

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
        location,
        setLocation,
        dateIn,
        setDateIn,
        dateOut,
        setDateOut,
        guest,
        setGuest,
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