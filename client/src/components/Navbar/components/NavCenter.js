import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../Context';
import SearchBar from './Search/SearchBar';
import SearchMenu from './Search/SearchMenu';
import SearchDetails from './Search/SearchDetails';
import { flexAlignCol } from '../../../styles/theme';

const Navcenter = styled.div`
  align-self: flex-start;
  ${flexAlignCol};
  align-items: center;
  width: 850px;
  transform: translateY(12px);
`;

const NavCenter = () => {
  const { navFixed } = useGlobalContext();
  const [navFocus, setNavFocus] = useState(0);
  const [searchFocus, setSearchFocus] = useState(-1);

  return (
    <Navcenter>
      <SearchMenu focus={navFocus} changeFocus={setNavFocus} />
      <SearchBar focus={searchFocus} changeFocus={setSearchFocus} />
      {(!navFixed && searchFocus !== -1) && 
        <SearchDetails focus={searchFocus} setFocus={setSearchFocus} />}
    </Navcenter>
  )
}

export default NavCenter
