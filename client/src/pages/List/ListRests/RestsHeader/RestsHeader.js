import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../../Context';
import RestsFilterBtn from './RestsFilterBtn';

const RestsHeader = () => {
  const { restList, searchValue } = useGlobalContext();
  const { dateIn, dateOut, guest } = searchValue;
  return (
    <Restsheader>
      <p>
        {restList.length >= 300 ? `300개 이상의 숙소` : `${restList.length}개의 숙소`} ∙ 
        {`${dateIn} - ${dateOut}`} ∙ 
        {`게스트 ${guest}명`}
      </p>
      <h1>지도에서 선택한 지역의 숙소</h1>
      <RestsFilterBtn />
      <p>
        예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.
        <a href="/">자세히 알아보기</a>
      </p>
    </Restsheader>
  )
}

const Restsheader = styled.header`
  padding: 24px 0;

  h1 {
    padding: 10px 0 20px;
    font-size: 32px;
  }

  a {
    padding: 0 0 0 5px;
    text-decoration: underline 
  };
`;

export default RestsHeader;
