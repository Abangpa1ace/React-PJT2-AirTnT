import React, {useState} from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../../Context';
import Pagination from './Pagination';

const Restspages = styled.div`
  padding: 20px 0;
  text-align: center;

  p { padding: 20px 0 30px; }
  span { 
    color: ${({ theme }) => theme.gray2};
    font-size: 12px;
  }
`;

const RestsPages = () => {
  const { restList } = useGlobalContext();
  const [pageIdx, setPageIdx] = useState(0);
  const startCount = pageIdx * 20 + 1;

  return (
    <Restspages>
      <Pagination setPageIdx={setPageIdx} />
      <p>숙소 {restList.length}개 중 {startCount} - {startCount+19}</p>
      <span>추가 수수료가 부과됩니다. 세금도 부과될 수 있습니다.</span>
    </Restspages>
  )
}

export default RestsPages
