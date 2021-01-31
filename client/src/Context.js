import React, { useState, useContext, useEffect } from 'react';
import { RestsAPI } from './Data/config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // Navigation bar Control
  const [navFixed, setNavFixed] = useState(true);

  // Search Values
  const [guest, setGuest] = useState(2);

  // Rests Data
  const [restList, setRestList] = useState([]);

  const fetchRests = async () => {
    const response = await fetch(RestsAPI, { method: 'GET' });
    const result = await response.json();
    setRestList(result.data);
  }
  
  useEffect(() => {
    fetchRests();
  }, []);

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