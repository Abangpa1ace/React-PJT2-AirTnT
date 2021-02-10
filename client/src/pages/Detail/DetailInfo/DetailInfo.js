import React from 'react';
import styled from 'styled-components';
import InfoHeader from './components/InfoHeader';
import InfoNotice from './components/InfoNotice';
import InfoWrite from './components/InfoWrite';
import InfoBedding from './components/InfoBedding';
import InfoFacility from './components/InfoFacility';
import InfoCalender from './components/InfoCalender';

const DetailInfo = () => {
  return (
    <Detailinfo>
      <InfoHeader />
      <InfoNotice />
      <InfoWrite />
      <InfoBedding />
      <InfoFacility />
      <InfoCalender />
    </Detailinfo>
  )
}

const Detailinfo = styled.section`
  width: 100%;

  p {
    font-size: 16px;
  }

  span {
    color: ${({ theme }) => theme.gray2};
  }
`;

export default DetailInfo
