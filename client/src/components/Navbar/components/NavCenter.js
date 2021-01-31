import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../Context';
import SearchBarOpener from './Search/SearchBarOpener';
import SearchBar from './Search/SearchBar';
import SearchMenu from './Search/SearchMenu';
import { flexAlignCol } from '../../../styles/theme';

const NavCenter = () => {
  const { searchOn } = useGlobalContext();
  const [navFocus, setNavFocus] = useState(0);

  return (
    <Navcenter >
      {!searchOn && <SearchBarOpener />}
      {searchOn && <SearchMenu navFocus={navFocus} setNavFocus={setNavFocus} />}
      {searchOn && <SearchBar />}
    </Navcenter>
  )
}

const Navcenter = styled.div`
  ${flexAlignCol};
  align-items: center;
  transition: all .5s ease;
  z-index: 250;
`;

export default NavCenter;
