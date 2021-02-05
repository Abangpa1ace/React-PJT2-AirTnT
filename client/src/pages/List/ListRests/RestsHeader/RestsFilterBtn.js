import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../../Components/Global/GlobalComponent';
import { flexAlign } from '../../../../Styles/theme';
import FilterFacilities from "./FilterModals/FilterFacilities";
import FilterPrice from "./FilterModals/FilterPrice";
import FilterTypes from "./FilterModals/FilterTypes";

const RestsFilterBtn = () => {
  const [filterFocus, setFilterFocus] = useState(-1);

  const FILTERMODALS = [
    {
      id: 0,
      filter: '숙소유형',
      modal: <FilterTypes setFilterFocus={setFilterFocus} />,
    },
    {
      id: 1,
      filter: '요금',
      modal: <FilterPrice setFilterFocus={setFilterFocus} />,
    },
    {
      id: 2,
      filter: '침실과 침대',
      modal: <FilterFacilities setFilterFocus={setFilterFocus} />,
    },
    {
      id: 3,
      filter: '즉시 예약',
      modal: null,
    },
    {
      id: 4,
      filter: '필터 추가하기',
      modal: null,
    },
  ];

  return (
    <FilterBtnCon>
      {FILTERMODALS.map((filterBtn) => {
        const { id, filter, modal } = filterBtn;
        return (
          <FilterBtnWrap>
            <Button
              padding= "10px 15px"
              margin="0 10px 0 0"
              border={(props) => props.theme.gray2}
              borderHov={(props) => props.theme.themeBlack}
              onClick={() => setFilterFocus(filterFocus === id ? -1 : id)}
            >{filter}</Button>
            {id === filterFocus && modal}
          </FilterBtnWrap>
        )
      })}
    </FilterBtnCon>
  )
}

const FilterBtnCon = styled.ul`
  ${flexAlign};
  padding: 0 0 20px 0;
`;

const FilterBtnWrap = styled.li`
  position: relative;
`;

export default RestsFilterBtn;
