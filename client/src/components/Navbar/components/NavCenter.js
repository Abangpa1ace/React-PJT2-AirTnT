import React from 'react';
import styled from 'styled-components';
import SearchBar from './Search/SearchBar';
import SearchMenu from './Search/SearchMenu';
import { flexAlignCol } from '../../../styles/theme';

const Navcenter = styled.div`
  align-self: flex-start;
  ${flexAlignCol};
  align-items: center;
  width: 850px;
  transform: translateY(10px);
  border: 1px solid red;
`;

const SearchDetails = styled.div`
  width: 850px;
  height: 420px;
  background: blue;
`;

const NavCenter = ({ focus, changeFocus }) => {
  
  return (
    <Navcenter>
      <SearchMenu focus={focus} changeFocus={changeFocus} />
      <SearchBar />
      <SearchDetails>hihi</SearchDetails>
    </Navcenter>
  )
}

export default NavCenter
