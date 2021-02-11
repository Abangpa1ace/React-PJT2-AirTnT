import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../Context';
import SearchBarOpener from '../SearchBar/SearchBarOpener';
import SearchBar from '../SearchBar/SearchBar';
import SearchMenu from '../SearchBar/SearchMenu';
import { flexAlignCol } from '../../../Styles/theme';

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
