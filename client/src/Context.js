import React, { useState, useContext, useEffect } from 'react';
import { RestsAPI } from './Data/config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // Navigation bar Control
  const [navFixed, setNavFixed] = useState(false);
  const [navFootWidth, setNavFootWidth] = useState("");
  const [searchOn, setSearchOn] = useState(true);

  // Search Values
  const [searchValue, setSearchValue] = useState({
    location: '',
    dateIn: 0,
    dateOut: 0,
    dateDiff: 0,
    guest: 0,
  });

  const [filterValue, setFilterValue] = useState({
    type: [],
    price: [10000, 1000000],
    bedding: {
      bed: 0,
      bedroom: 0,
      bathroom: 0,
    }
  })

  // Rests Data
  const [restsTotal, setRestsTotal] = useState(0);
  const [restList, setRestList] = useState([]);
  const [page, setPage] = useState(1);
  const LIMIT = 15;

  const fetchRests = async () => {
    const { location } = searchValue;
    const { type, price, bedding } = filterValue;
    let RestsAPI_Query = `${RestsAPI}?page=${page}&limit=${LIMIT}`;
    if (location && location !== '가까운 여행지 둘러보기') {
      RestsAPI_Query += `&search[location]=${searchValue.location}`;
    }
    if (type.length !== 0) {
      RestsAPI_Query += `&filter[type]=${type}`
    }
    if (price[0] > 10000 || price[1] < 1000000) {
      RestsAPI_Query += `&filter[price]=${price}`
    }
    for (let key in bedding) {
      if (bedding[key] > 0) {
        RestsAPI_Query += `&filter[${key}]=${bedding[key]}`
      }
    }
    const response = await fetch(RestsAPI_Query, { method: 'GET' });
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

  const updateFilterValue = (name, value) => {
    setFilterValue({
      ...filterValue,
      [name]: value,
    })
  }

  // rest Detail Data
  const [restDetail, setRestDetail] = useState({});

  return (
    <AppContext.Provider
      value={{
        navFixed,
        setNavFixed,
        navFootWidth,
        setNavFootWidth,
        handleNavFixed,
        searchOn,
        setSearchOn,
        fetchRests,
        searchValue,
        setSearchValue,
        updateSearchValue,
        filterValue,
        setFilterValue,
        updateFilterValue,
        restList,
        setRestList,
        restsTotal,
        page,
        setPage,
        LIMIT,
        restDetail,
        setRestDetail,
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