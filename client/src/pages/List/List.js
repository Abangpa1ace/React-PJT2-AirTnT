import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../Context'
import ListRests from './ListRests';
import ListMap from './ListMap';

const List = () => {
  const { setNavFixed, setSearchOn } = useGlobalContext();

  useEffect(() => {
    setNavFixed(true);
    setSearchOn(false);
  }, [])

  return (
    <ListPage>
      <ListRests />
      <ListMap />
    </ListPage>
  )
}

const ListPage = styled.main`
  display: flex;
  align-items: flex-start;
`;

export default List;