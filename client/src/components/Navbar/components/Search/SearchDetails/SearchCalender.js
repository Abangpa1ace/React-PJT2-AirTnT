import React from 'react';
import styled from 'styled-components';

const SearchCalender = () => {
  return (
    <DetailCalender>
      calender
    </DetailCalender>
  )
}

const DetailCalender = styled.div`
  position: absolute;
  width: 100%;
  background: #ffffff;
  padding: 20px 40px;
  border-radius: ${({ theme }) => theme.radius };
  box-shadow: ${({ theme }) => theme.shadowDiagonal};
  overflow: hidden;
`;

export default SearchCalender;
