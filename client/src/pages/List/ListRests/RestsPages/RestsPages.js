import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../../Context';
import RestsPageBtn from './RestsPageBtn';

const RestsPages = () => {
  const { restsTotal, page, LIMIT } = useGlobalContext();
  let startCount = (page-1) * LIMIT + 1;
  let endCount = startCount + LIMIT - 1 > restsTotal ? restsTotal : startCount + LIMIT - 1;

  return (
    <Restspages>
      <RestsPageBtn />
      <p>숙소 {restsTotal}개 중 {startCount} - {endCount}</p>
      <span>추가 수수료가 부과됩니다. 세금도 부과될 수 있습니다.</span>
    </Restspages>
  )
}

const Restspages = styled.div`
  padding: 20px 0;
  text-align: center;

  p { padding: 20px 0 30px; }
  span { 
    color: ${({ theme }) => theme.gray2};
    font-size: 12px;
  }
`;

export default RestsPages
