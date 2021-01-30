import React from 'react';
import styled from 'styled-components';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { useGlobalContext } from '../../../../../Context';

const SearchCalender = () => {
  const { startDate } = useGlobalContext();
  
  return (
    <DetailCalender>
      <DateRangePicker 
        startDate={startDate}
      />
    </DetailCalender>
  )
}

const DetailCalender = styled.div`
  position: absolute;
  width: 100%;
  background: #ffffff;
  padding: 40px;
  border-radius: ${({ theme }) => theme.radius };
  box-shadow: ${({ theme }) => theme.shadowDiagonal};
  overflow: hidden;
`;

export default SearchCalender;