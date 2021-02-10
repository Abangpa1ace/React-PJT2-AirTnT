import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import 'react-dates/lib/css/_datepicker.css';
import { useGlobalContext } from '../../../../../Context';

const SearchCalender = ({ setSearchFocus }) => {
  const { searchValue, setSearchValue } = useGlobalContext();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(START_DATE);

  useEffect(() => {
    dateSelect();
  }, [startDate, endDate]);

  const dateSelect = () => {
    const dateKey = "_d"
    if (startDate !== null) {
      setSearchValue({
        ...searchValue,
        dateIn: moment(startDate[dateKey].toString()),
      })
      setSearchFocus(2);
    }
    if (endDate !== null) {
      setSearchValue({
        ...searchValue,
        dateOut: moment(endDate[dateKey].toString()),
        dateDiff: moment.duration(endDate.diff(startDate)).asDays(),
      })
      setSearchFocus(3);
    }
  }

  return (
    <DetailCalender>
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
    </DetailCalender>
  )
}

const DetailCalender = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  background: #ffffff;
  padding: 40px;
  border-radius: ${({ theme }) => theme.radius };
  box-shadow: ${({ theme }) => theme.shadowDiagonal};
`;

export default SearchCalender;