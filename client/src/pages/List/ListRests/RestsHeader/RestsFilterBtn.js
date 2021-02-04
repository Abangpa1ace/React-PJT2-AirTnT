import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../../Components/Global/GlobalComponent';
import { flexAlign } from '../../../../Styles/theme';
import { FILTERMODALS } from './FilterData';

const RestsFilterBtn = () => {
  const [filterFocus, setFilterFocus] = useState(-1);
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
              onClick={() => setFilterFocus(filterFocus !== -1 ? -1 : id)}
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
