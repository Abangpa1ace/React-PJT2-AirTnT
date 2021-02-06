import React, { useState } from 'react';
import styled from 'styled-components';
import { flexCenter, flexBetween } from '../../../../../Styles/theme';
import CounterBtn from '../../../../../Components/Global/CounterBtn';
import { BEDDINGDATA } from '../FilterData';
import FilterModalBox from './FilterModalBox';

const FilterBedding = () => {
  const [beddingCount, setBeddingCount] = useState({
    bed: 0,
    bedroom: 0,
    bathroom: 0,
  })

  const minusBedding = (name) => {
    const minusValue = beddingCount[name] === 0 ? 0 : beddingCount[name]-1;
    setBeddingCount({
      ...beddingCount,
      [name]: minusValue,
    })
  };

  const plusBedding = (name) => {
    const plusValue = beddingCount[name] === 16 ? 16 : beddingCount[name]+1;
    setBeddingCount({
      ...beddingCount,
      [name]: plusValue,
    })
  };

  const ClearBedding = () => {
    setBeddingCount({
      bed: 0,
      bedroom: 0,
      bathroom: 0,
    })
  }

  return (
    <FilterModalBox width="320px" onClickDelete={ClearBedding} onClickSave>
      <BeddingContainer>
        {BEDDINGDATA.map((bedding) => {
          const { id, infoEn, title } = bedding;
          return (
            <BeddingContent key={id}>
              <CounterLeft>
                <h6>{title} 수</h6>
              </CounterLeft>
              <CounterRight>
                <CounterBtn
                  condition={beddingCount[infoEn] === 0}
                  clickEvent={() => minusBedding(infoEn)}>-</CounterBtn>
                <span>{beddingCount[infoEn]}</span>
                <CounterBtn
                  condition={beddingCount[infoEn] === 16}
                  clickEvent={() => plusBedding(infoEn)}>+</CounterBtn>
              </CounterRight>
            </BeddingContent>
          )
        })}
      </BeddingContainer>
    </FilterModalBox>
  )
}

export default FilterBedding;

const BeddingContainer = styled.ul`
  padding: 20px;
`;

const BeddingContent = styled.li`
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
