import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../Context'
import ListRests from './ListRests/ListRests';
import ListMap from './ListMap/ListMap';

const List = () => {
  const [restId, setRestId] = useState(-10);
  const { setNavFixed, setNavFootWidth, setSearchOn } = useGlobalContext();

  useEffect(() => {
    setNavFixed(true);
    setNavFootWidth("1600px");
    setSearchOn(false);
  }, [setNavFixed, setNavFootWidth, setSearchOn])

  return (
    <ListPage>
      <ListRests restId={restId} setRestId={setRestId} />
      <ListMap restId={restId} />
    </ListPage>
  )
}

const ListPage = styled.main`
  display: flex;
  align-items: flex-start;
  margin: 50px 0 0;
`;

export default List;