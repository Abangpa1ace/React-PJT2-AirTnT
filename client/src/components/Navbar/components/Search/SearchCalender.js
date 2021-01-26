import React from 'react';
import styled from 'styled-components';

const DetailCalender = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 20px 40px;
  border-radius: ${({ theme }) => theme.radius };
  overflow: hidden;
`;

const SearchCalender = () => {
  return (
    <DetailCalender>
      calender
    </DetailCalender>
  )
}

export default SearchCalender
