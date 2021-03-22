import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../../../Context';
import FilterModalBox from './FilterModalBox';
import CounterBtn from '../../../../../GlobalComponents/Common/CounterBtn';
import { flexCenter, flexBetween } from '../../../../../styles/theme';
import { BEDDINGDATA } from './FilterData';


const FilterBedding = ({ setFilterFocus }) => {
  const { filterValue, updateFilterValue, fetchRests } = useGlobalContext();
  const { bedding } = filterValue;

  const minusBedding = (name) => {
    const minusValue = bedding[name] === 0 ? 0 : bedding[name]-1;
    updateFilterValue('bedding', {
      ...bedding,
      [name]: minusValue,
    })
  };

  const plusBedding = (name) => {
    const plusValue = bedding[name] === 16 ? 16 : bedding[name]+1;
    updateFilterValue('bedding', {
      ...bedding,
      [name]: plusValue,
    })
  };

  const clearBedding = () => {
    updateFilterValue('bedding', {
      bed: 0,
      bedroom: 0,
      bathroom: 0,
    })
  }

  const filterBedding = () => {
    fetchRests();
    setFilterFocus(-1);
  }

  return (
    <FilterModalBox width="320px" onClickDelete={clearBedding} onClickSave={filterBedding}>
      <BeddingContainer>
        {BEDDINGDATA.map((bedData) => {
          const { id, infoEn, title } = bedData;
          return (
            <BeddingContent key={id}>
              <CounterLeft>
                <h6>{title} 수</h6>
              </CounterLeft>
              <CounterRight>
                <CounterBtn
                  condition={bedding[infoEn] === 0}
                  clickEvent={() => minusBedding(infoEn)}>-</CounterBtn>
                <span>{bedding[infoEn]}</span>
                <CounterBtn
                  condition={bedding[infoEn] === 16}
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
