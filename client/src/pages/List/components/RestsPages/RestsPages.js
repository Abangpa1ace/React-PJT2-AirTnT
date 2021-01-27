import React from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';

const Restspages = styled.div`
  padding: 20px 0;
`;

const RestsPages = () => {
  return (
    <Restspages>
      <Pagination />
    </Restspages>
  )
}

export default RestsPages
