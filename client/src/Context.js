import React, { useState, useContext, useEffect } from 'react';
// import moment from 'moment';
import { RestsAPI } from './Data/config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // Navigation bar Control
  const [navFixed, setNavFixed] = useState(false);
  const [searchOn, setSearchOn] = useState(true);

  // Search Values
  const [searchValue, setSearchValue] = useState({
    location: '',
    dateIn: null,
    dateOut: null,
    dateDiff: 0,
    guest: 0,
  });

  // Rests Data
  const [restsTotal, setRestsTotal] = useState(0);
  const [restList, setRestList] = useState([]);
  const [page, setPage] = useState(1);
  const LIMIT = 15;

  const fetchRests = async () => {
    const response = await fetch(
      `${RestsAPI}?search[location]=${searchValue.location}&page=${page}&limit=${LIMIT}`, 
      { method: 'GET' }
    );
    const result = await response.json();
    setRestList(result.restsList);
    setRestsTotal(result.restsTotal);
  }
  
  useEffect(() => {
    fetchRests();
  }, [page]);

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
        fetchRests,
        searchValue,
        setSearchValue,
        updateSearchValue,
        restList,
        setRestList,
        restsTotal,
        page,
        setPage,
        LIMIT,
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