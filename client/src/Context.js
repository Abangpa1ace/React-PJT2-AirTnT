import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navFixed, setNavFixed] = useState(false);
  const [searchOn, setSearchOn] = useState(true);
  const [searchValue, setSearchValue] = useState({
    location: '',
    date: [new Date(), new Date()],
    guest: 0,
  });
  let today = new Date();
  const [startDate, setStartDate] = useState(today);

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
        startDate,
        setStartDate,
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