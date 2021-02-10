import React from 'react'
import styled from 'styled-components';
import DetailConBox from '../../DetailConBox';
import { BiBed } from 'react-icons/bi';

const InfoBedding = () => {
  return (
    <DetailConBox head="침대/침구 유형">
      <BeddingListWrap>
        <BeddingList>
          <BiBed />
          <p>1번 침실</p>
          <span>더블침대 1개</span>
        </BeddingList>
        <BeddingList>
          <BiBed />
          <p>2번 침실</p>
          <span>더블침대 1개</span>
        </BeddingList>
      </BeddingListWrap>
    </DetailConBox>
  )
}

const BeddingListWrap = styled.ul`
  display: flex;
`;

const BeddingList = styled.li`
  width: 210px;
  padding: 20px;
  margin: 0 15px 0 0;
  border: 1px solid ${({ theme }) => theme.gray1};
  border-radius: 10px;

  svg {
    width: 30px;
    height: 30px;
  }

  p {
    margin: 20px 0 15px;
  }
`;

export default InfoBedding;
