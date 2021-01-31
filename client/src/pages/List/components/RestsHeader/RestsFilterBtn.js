import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../Components/Global/GlobalComponent';
import { flexAlign } from '../../../../styles/theme';

const FilterBtnCon = styled.ul`
  ${flexAlign};
  padding: 0 0 20px 0;
`;

const RestsFilterBtn = () => {
  const arr = ['숙소유형', '요금', '침실과 침대', '즉시 예약', '필터 추가하기'];
  return (
    <FilterBtnCon>
      {arr.map((ele) => {
        return (
          <Button
            padding='10px 15px'
            margin='0 10px 0 0'
            border={(props) => props.theme.gray2}
            borderHov={(props) => props.theme.themeBlack}
            >
            {ele}
          </Button>
        )
      })}
    </FilterBtnCon>
  )
}

export default RestsFilterBtn
