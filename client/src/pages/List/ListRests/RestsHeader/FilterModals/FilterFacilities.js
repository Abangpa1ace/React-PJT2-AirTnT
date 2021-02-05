import React, { useState } from 'react';
import styled from 'styled-components';
import { flexCenter, flexBetween } from '../../../../../Styles/theme';
import CounterBtn from '../../../../../Components/Global/CounterBtn';
import { FACILITYDATA } from '../FilterData';
import FilterModalBox from './FilterModalBox';

const FilterFacilities = () => {
  const [facilityCount, setFacilityCount] = useState({
    bed: 0,
    bedroom: 0,
    bathroom: 0,
  })

  const minusFacility = (name) => {
    const minusValue = facilityCount[name] === 0 ? 0 : facilityCount[name]-1;
    setFacilityCount({
      ...facilityCount,
      [name]: minusValue,
    })
  };

  const plusFacility = (name) => {
    const plusValue = facilityCount[name] === 16 ? 16 : facilityCount[name]+1;
    setFacilityCount({
      ...facilityCount,
      [name]: plusValue,
    })
  };

  const ClearFacility = () => {
    setFacilityCount({
      bed: 0,
      bedroom: 0,
      bathroom: 0,
    })
  }

  return (
    <FilterModalBox width="320px" onClickDelete={ClearFacility} onClickSave>
      <FacilityContainer>
        {FACILITYDATA.map((facility) => {
          const { id, infoEn, title } = facility;
          return (
            <FacilityContent key={id}>
              <CounterLeft>
                <h6>{title} 수</h6>
              </CounterLeft>
              <CounterRight>
                <CounterBtn
                  condition={facilityCount[infoEn] === 0}
                  clickEvent={() => minusFacility(infoEn)}>-</CounterBtn>
                <span>{facilityCount[infoEn]}</span>
                <CounterBtn
                  condition={facilityCount[infoEn] === 16}
                  clickEvent={() => plusFacility(infoEn)}>+</CounterBtn>
              </CounterRight>
            </FacilityContent>
          )
        })}
      </FacilityContainer>
    </FilterModalBox>
  )
}

export default FilterFacilities;

const FacilityContainer = styled.ul`
  padding: 20px;
`;

const FacilityContent = styled.li`
  ${flexBetween};
  padding: 15px 0;
`;

const CounterLeft = styled.div`
  h6 {
    font-size: 16px; 
    font-weight: normal; 
  }
`;

const CounterRight = styled.div`
  ${flexCenter};
  span {
    width: 20px;
    text-align: center;
    margin: 0 15px;
    font-size: 16px;
  }
`;
