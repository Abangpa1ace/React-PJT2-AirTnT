import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../Common/StyledCommon';
import { BiSearch } from 'react-icons/bi';
import { flexBetween } from '../../../../Styles/theme';
import { useGlobalContext } from '../../../../Context';

const SearchBarOpener = () => {
  const { setSearchOn } = useGlobalContext();

  return (
    <SearchbarOpener onClick={() => setSearchOn(true)}>
      검색 시작하기
      <Button 
        width="36px"
        height="36px"
        background={(props) => props.theme.themePink}>
        <BiSearch fill="#ffffff" />
      </Button>
    </SearchbarOpener>
  )
}

export default SearchBarOpener;

const SearchbarOpener = styled.div`
  ${flexBetween};
  position: relative;
  width: 300px;
  height: 50px;
  background: #ffffff;
  color: #000000;
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.gray1};
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  transition: all .3s ease;

  button {
    position: absolute;
    top: 7px;
    right: 7px;

    svg {
      fill: #ffffff;
      font-size: 16px;
    }
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowDown};
  }
`;
