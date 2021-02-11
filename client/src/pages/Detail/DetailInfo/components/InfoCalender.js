import React, { useState } from 'react';
import styled from 'styled-components';
import DetailConBox from '../../common/DetailConBox';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import 'react-dates/lib/css/_datepicker.css';
import { useGlobalContext } from '../../../../Context';

const InfoCalender = () => {
  const { searchValue } = useGlobalContext();
  const [startDate, setStartDate] = useState(searchValue.dateIn);
  const [endDate, setEndDate] = useState(searchValue.dateOut);
  const [focusedInput, setFocusedInput] = useState(START_DATE);
  
  return (
    <DetailConBox head={`Mangwon 1(il)-dong, Mapo-gu에서 ${searchValue.dateDiff}박`}>
      <DateSpan>
        {`${searchValue.dateIn && searchValue.dateIn.format("YYYY년 M월 D일")} - 
        ${searchValue.dateOut && searchValue.dateOut.format("YYYY년 M월 D일")}`}
      </DateSpan>
      <DayPickerRangeController
        startDate={startDate}
        endDate={endDate}
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => {
          setFocusedInput(focusedInput || START_DATE)
        }}
        numberOfMonths={2}
      />
    </DetailConBox>
  )
}

const DateSpan = styled.span`
  display: block;
  margin: 0 0 30px;
`;

export default InfoCalender;
