import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context';
import ListRests from './ListRests';
import ListMap from './ListMap';

const ListPage = styled.main`
  display: flex;
  align-items: flex-start;
`;

const List = () => {
  const { navFixed, setNavFixed } = useGlobalContext();
  
  // delete later
  useEffect(() => {
    setNavFixed(true)  
  }, [navFixed, setNavFixed])

  return (
    <ListPage>
      <ListRests />
      <ListMap />
    </ListPage>
  )
}

export default List;