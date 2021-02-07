import React, { useState } from 'react';
import styled from 'styled-components';
import DetailConBox from '../../DetailConBox';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import 'react-dates/lib/css/_datepicker.css';

const InfoCalender = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(START_DATE);
  
  return (
    <DetailConBox head={`Mangwon 1(il)-dong, Mapo-gu에서 2박`}>
      <DateSpan>{`2021년 3월 2일 - 2021년 3월 4일`}</DateSpan>
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
