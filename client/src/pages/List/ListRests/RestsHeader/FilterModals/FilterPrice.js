import React, { useState } from 'react'
import styled from 'styled-components';
import { RangeSlider, InputGroup, InputNumber } from 'rsuite';
import "rsuite/dist/styles/rsuite-default.min.css";
import FilterModalBox from './FilterModalBox';
import { useGlobalContext } from '../../../../../Context';
import { flexAlignCol } from '../../../../../Styles/theme';

const FilterPrice = ({ setFilterFocus }) => {
  const { restList, filterValue, updateFilterValue, fetchRests } = useGlobalContext();
  const { price } = filterValue;
  const MIN_PRICE = 10000;
  const MAX_PRICE = 1000000;
  // const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE])
  const avgPrice = Math.round(restList.map(rest => rest.price).reduce((acc, cur) => acc + cur) / restList.length).toLocaleString();

  const updateMinPrice = (value) => {
    updateFilterValue('price', [Number(value), price[1]]);
  }

  const updateMaxPrice = (value) => {
    updateFilterValue('price', [price[0], Number(value)]);
  }

  const clearPrice = () => {
    updateFilterValue('price', [MIN_PRICE, MAX_PRICE]);
  }

  const filterPrice = () => {
    fetchRests();
    setFilterFocus(-1);
  }

  return (
    <FilterModalBox width="400px" onClickDelete={clearPrice} onClickSave={filterPrice}>
      <PriceContainer>
        <p>평균 1박 요금은 ₩{avgPrice}입니다</p>   
        <PriceGraph>
          <PriceSlider 
            progress
            value={price}
            // defaultValue={[MIN_PRICE, MAX_PRICE]}
            min={MIN_PRICE}
            max={MAX_PRICE}
            onChange={range => updateFilterValue('price', range)}
          />
          <InputGroup>
          <InputNumber
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={price[0]}
            onChange={(newMin) => updateMinPrice(newMin)}
          />
          <InputGroup.Addon>to</InputGroup.Addon>
          <InputNumber
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={price[1]}
            onChange={(newMax) => updateMaxPrice(newMax)}
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
