import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../../Global/GlobalComponent';
import { SEARCHSET } from '../NavbarData';
import { BiSearch } from 'react-icons/bi';
import { flexCenter, flexAlignCol } from '../../../Styles/theme';

const Searchbar = styled.div`
  ${flexCenter};
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 70%);
  width: 850px;
  height: 65px;
  background: #ffffff;
  border-radius: ${(props) => props.theme.radius};
  overflow: hidden;
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

export default function SearchBar() {
  const [active, setActive] = useState(false);
  const [searchFocus, setSearchFocus] = useState(-1);

  return (
    <Searchbar onClick={() => setActive(!active)}>
      {SEARCHSET.map((unit, idx) => {
        const { id, className, type, title, desc } = unit;
        return (
          <SearchUnit key={id}
            className={className}
            focused={idx === searchFocus} 
            onClick={() => setSearchFocus(idx)}>
            <span>{title}</span>
            {type === 'input'
              ? <input type="text" placeholder={desc} />
              : <p>{desc}</p>}
            {idx === SEARCHSET.length - 1 && 
              <Button 
                width={active ? "80px" : "49px"}
                color="#ffffff"
                background={(props) => props.theme.themePink}
                backgroundHov={(props) => props.theme.themePinkDarker}>
                <BiSearch />{active && '검색'}
              </Button>
            }
          </SearchUnit>
        )
      })}
    </Searchbar>
  )
}
