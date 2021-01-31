import React, { useState, useContext, useEffect } from 'react';
// import moment from 'moment';
import { RestsAPI } from './Data/config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // Navigation bar Control
  const [navFixed, setNavFixed] = useState(false);
  const [searchOn, setSearchOn] = useState(true);
  const [signModalMode, setSignModalMode] = useState(null);

  // Search Values
  const [searchValue, setSearchValue] = useState({
    location: '',
    dateIn: null,
    dateOut: null,
    dateDiff: 0,
    guest: 0,
  });

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
    let isFixed = pageYOffset >= 60;
    setNavFixed(isFixed);
    setSearchOn(!isFixed);
  }

  const updateSearchValue = (name, value) => {
    setSearchValue({
      ...searchValue,
      [name]: value,
    })
  };

  return (
    <AppContext.Provider
      value={{
        navFixed,
        setNavFixed,
        handleNavFixed,
        searchOn,
        setSearchOn,
        searchValue,
        updateSearchValue,
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