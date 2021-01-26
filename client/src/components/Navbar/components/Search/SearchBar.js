import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../../../Global/GlobalComponent';
// import { SEARCHSET } from '../../NavbarData';
import { BiSearch } from 'react-icons/bi';
import { flexCenter, flexAlignCol } from '../../../../styles/theme';
import { useGlobalContext } from '../../../../Context';

const Searchbar = styled.div`
  ${flexCenter};
  position: relative;
  width: 100%;
  height: 65px;
  margin: 15px;
  background: #ffffff;
  border-radius: ${({ theme }) => theme.radius};
  transition: all .3s ease;
  overflow: hidden;

  &.hide { 
    opacity: 0;
    visibility: hidden;
  }
`;

const SearchUnit = styled.div`
  ${flexAlignCol};
  height: 100%;
  padding: 10px 30px;
  border-radius: ${({ theme }) => theme.radius};

  &:hover { 
    background: ${({ theme }) => theme.gray0};
  }
  &.unit-location, &.unit-people {
    width: 30%;
  }
  &.unit-checkin, &.unit-checkout {
    width: 20%;
  }

  ${({ focused }) => focused &&
    css`
      background: #ffffff;
      box-shadow: 0px 2px 5px 1px #aaaaaa;
    `
  }

  span {
    margin-bottom: 3px;
    font-size: 12px;
    color: #000000;
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.gray2};
  }

  button {
    position: absolute;
    top: 8px;
    right: 8px;
    height: 49px;
    border-radius: 30px;

    svg { 
      fill: #ffffff;
    }
  }
`;

const SearchBar = ({ focus, changeFocus }) => {
  const [active, setActive] = useState(false);
  const { navFixed, location, setLocation, dateIn, dateOut, guest } = useGlobalContext();

  return (
    <Searchbar className={!navFixed ? '' : 'hide'} onClick={() => setActive(true)}>
      <SearchUnit
        className='unit-location'
        focused={focus === 0} 
        onClick={() => changeFocus(0)}>
        <span>위치</span>
        <input type="text" placeholder='어디로 여행가세요?' value={location} onChange={(e) => setLocation(e.target.value)}/>
      </SearchUnit>
      <SearchUnit
        className='unit-checkin'
        focused={focus === 1} 
        onClick={() => changeFocus(1)}>
        <span>체크인</span>
        <p>{dateIn ? dateIn : '날짜 추가'}</p>
      </SearchUnit>
      <SearchUnit
        className='unit-checkout'
        focused={focus === 2} 
        onClick={() => changeFocus(2)}>
        <span>체크아웃</span>
        <p>{dateOut ? dateOut : '날짜 추가'}</p>
      </SearchUnit>
      <SearchUnit
        className='unit-people'
        focused={focus === 3} 
        onClick={() => changeFocus(3)}>
        <span>인원</span>
        <p placeholder="게스트 추가"></p>
      </SearchUnit>
    </Searchbar>
  )
}

export default SearchBar;