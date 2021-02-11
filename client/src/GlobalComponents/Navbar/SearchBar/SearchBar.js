import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Linker, Button } from '../../Common/StyledCommon';
import SearchDetails from './SearchDetails/SearchDetails';
import { BiSearch } from 'react-icons/bi';
import { flexCenter, flexAlignCol } from '../../../Styles/theme';
import { useGlobalContext } from '../../../Context';

const SearchBar = () => {
  const { searchOn, setSearchOn, searchValue, updateSearchValue, fetchRests } = useGlobalContext();
  const { location, dateIn, dateOut, guest } = searchValue;
  const [searchActive, setSearchActive] = useState(false);
  const [searchFocus, setSearchFocus] = useState(-1);
  
  useEffect(() => {
    setSearchActive(false);
    setSearchFocus(-1)
  }, [setSearchActive, setSearchFocus])

  const moveToList = () => {
    fetchRests();
    setSearchOn(false);
  }

  return (
    <SearchBarCon>
      <Searchbar
        searchOn={searchOn}
        searchActive={searchActive} 
        onClick={() => setSearchActive(true)}>
        <SearchUnit
          className='unit-location'
          onColor={location}
          focused={searchFocus === 0}
          onClick={() => setSearchFocus(0)}>
          <span>위치</span>
          <input type="text" placeholder='어디로 여행가세요?' autoComplete="off"
            name="location" value={location} 
            onChange={(e) => updateSearchValue(e.target.name, e.target.value)}/>
        </SearchUnit>
        <SearchUnit
          className='unit-checkin'
          onColor={dateIn}
          focused={searchFocus === 1} 
          onClick={() => setSearchFocus(1)}>
          <span>체크인</span>
          <p>{dateIn ? dateIn.format("M월 D일") : '날짜 추가'}</p>
        </SearchUnit>
        <SearchUnit
          className='unit-checkout'
          onColor={dateOut}
          focused={searchFocus === 2} 
          onClick={() => setSearchFocus(2)}>
          <span>체크아웃</span>
          <p>{dateOut ? dateOut.format("M월 D일") : '날짜 추가'}</p>
        </SearchUnit>
        <SearchUnit
          className='unit-people'
          onColor={guest !== 0}
          focused={searchFocus === 3} 
          onClick={() => setSearchFocus(3)}>
          <span>인원</span>
          <p>게스트 {guest === 0 ? '추가' : `${guest}명`}</p>
        </SearchUnit>
        <Linker to="/list" onClick={moveToList}>
          <Button 
            width={searchActive ? "80px" : "49px"}
            color="#ffffff"
            background={(props) => props.theme.themePink}
            backgroundHov={(props) => props.theme.themePinkDarker}>
            <BiSearch />
            {searchActive && <span>검색</span>}
          </Button>
        </Linker>
      </Searchbar>
      <SearchDetails setSearchActive={setSearchActive} searchFocus={searchFocus} setSearchFocus={setSearchFocus} />
    </SearchBarCon>
  )
}

const SearchBarCon = styled.div`
  width: 850px;
  margin: 20px 0 0;
`;

const Searchbar = styled.div`
  ${flexCenter};
  position: relative;
  width: 100%;
  height: 65px;
  background: ${({ searchActive, theme }) => searchActive ? theme.gray1 : '#ffffff' };
  border: 1px solid ${({ searchOn, theme }) => searchOn ? theme.gray1 : 'none'};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ searchOn }) => searchOn ? 'none' : '0px 0px 10px 1px #747474'};
  transition: all .3s ease;
  overflow: hidden;

    button {
    position: absolute;
    top: 8px;
    right: 8px;
    height: 49px;
    transition: all .3s ease;
    z-index: 200;

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
      z-index: 150;
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

export default SearchBar;