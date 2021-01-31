import React, { useState } from 'react'
import styled from 'styled-components';
import { RangeSlider, InputGroup, InputNumber } from 'rsuite';
import "rsuite/dist/styles/rsuite-default.min.css";
import { useGlobalContext } from '../../../../../Context';
import { flexAlignCol } from '../../../../../Styles/theme';
import FilterModalBox from './FilterModalBox';

const FilterPrice = () => {
  const { restList } = useGlobalContext();
  const avgPrice = restList.map(rest => rest.price).reduce((acc, cur) => acc + cur) / restList.length;
  const [priceRange, setPriceRange] = useState([10000, 1000000])

  return (
    <FilterModalBox width="400px" onClickDelete={() => setPriceRange([10000, 1000000])} onClickSave>
      <PriceContainer>
        <p>평균 1박 요금은 ₩{avgPrice.toLocaleString()}입니다</p>   
        <PriceGraph>
          <PriceSlider 
            progress
            value={priceRange}
            defaultValue={priceRange}
            min={10000}
            max={1000000}
            onChange={value => {
              setPriceRange(value);
            }}
          />
          <InputGroup>
          <InputNumber
            min={0}
            max={100}
            value={priceRange[0]}
            onChange={nextValue => {
              const [start, end] = priceRange;
              if (nextValue > end) {
                return;
              }
              setPriceRange([nextValue, end]);
            }}
          />
          <InputGroup.Addon>to</InputGroup.Addon>
          <InputNumber
            min={0}
            max={100}
            value={priceRange[1]}
            onChange={nextValue => {
              const [start, end] = priceRange;
              if (start > nextValue) {
                return;
              }
              setPriceRange([start, nextValue]);
            }}
          />
        </InputGroup>
        </PriceGraph>
      </PriceContainer>
    </FilterModalBox>
  )
}

const PriceContainer = styled.div`
  padding: 30px 15px;
  p {
    font-size: 16px;
  }
`;

const PriceGraph = styled.div`
  ${flexAlignCol};
  position: relative;
  width: 350px;
  margin: 0 auto;
  padding: 50px 0 5px;
`;

const PriceSlider = styled(RangeSlider)`
  margin: 20px;
`;

export default FilterPrice;
