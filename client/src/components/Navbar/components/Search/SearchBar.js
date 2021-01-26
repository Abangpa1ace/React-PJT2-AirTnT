import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Linker, Button } from '../../../Global/GlobalComponent';
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
  background: ${({ active, theme }) => active ? theme.gray1 : '#ffffff' };
  border-radius: ${({ theme }) => theme.radius};
  transition: all .3s ease;
  overflow: hidden;

  &.hide { 
    opacity: 0;
    visibility: hidden;
  }

    button {
    position: absolute;
    top: 8px;
    right: 8px;
    height: 49px;
    border-radius: 30px;
    transition: all .3s ease;

    svg { 
      fill: #ffffff;
    }

    span {
      margin-left: 5px;
      color: #ffffff;
    }
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

  p, input {
    color: ${({ onColor, theme }) => onColor ? theme.themePinkDarker : theme.gray2};
  }
`;

const SearchBar = ({ active, setActive, focus, setFocus }) => {
  const { 
    navFixed, 
    location, setLocation, 
    dateIn, 
    dateOut,
    guest,
  } = useGlobalContext();
  
  useEffect(() => {
    setActive(false)
    setFocus(-1)
  }, [navFixed, setActive, setFocus])

  return (
    <Searchbar active={active} className={!navFixed ? '' : 'hide'} onClick={() => setActive(true)}>
      <SearchUnit
        className='unit-location'
        onColor={location}
        focused={focus === 0}
        onClick={() => setFocus(0)}>
        <span>위치</span>
        <input type="text" placeholder='어디로 여행가세요?' value={location} onChange={(e) => setLocation(e.target.value)}/>
      </SearchUnit>
      <SearchUnit
        className='unit-checkin'
        onColor={dateIn}
        focused={focus === 1} 
        onClick={() => setFocus(1)}>
        <span>체크인</span>
        <p>{dateIn ? dateIn : '날짜 추가'}</p>
      </SearchUnit>
      <SearchUnit
        className='unit-checkout'
        onColor={dateOut}
        focused={focus === 2} 
        onClick={() => setFocus(2)}>
        <span>체크아웃</span>
        <p>{dateOut ? dateOut : '날짜 추가'}</p>
      </SearchUnit>
      <SearchUnit
        className='unit-people'
        onColor={guest !== 0}
        focused={focus === 3} 
        onClick={() => setFocus(3)}>
        <span>인원</span>
        <p>게스트 {guest === 0 ? '추가' : `${guest}명`}</p>
      </SearchUnit>
      <Linker to="/list">
        <Button 
          width={active ? "80px" : "49px"}
          color="#ffffff"
          background={(props) => props.theme.themePink}
          backgroundHov={(props) => props.theme.themePinkDarker}>
          <BiSearch />
          {active && <span>검색</span>}
        </Button>
      </Linker>
    </Searchbar>
  )
}

export default SearchBar;