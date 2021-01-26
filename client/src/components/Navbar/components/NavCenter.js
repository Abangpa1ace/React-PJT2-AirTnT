import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../Context';
import { Linker } from '../../Global/GlobalComponent';
import SearchBar from '../components/SearchBar';
import { flexAlign } from '../../../styles/theme';
import { NAVBARMENU } from '../NavbarData';

const Navcenter = styled.ul`
  position: relative;
  ${flexAlign}

  li {
    margin: 0 15px;
    &.focus a { border-bottom: 1px solid #ffffff; }
  }
`;

const NavCenter = ({ focus, changeFocus }) => {
  const { navFixed } = useGlobalContext();

  return (
    <Navcenter>
      {NAVBARMENU.map((menu, idx) => {
        return (
          <li key={menu.id} className={idx === focus ? 'focus' : ''} onClick={() => changeFocus(idx)}>
            <Linker 
              to={menu.link}
              color={navFixed ? null : '#FFFFFF'}
              colorHov={(props) => props.theme.gray1}
              fontSize="initial">
                {menu.text}
            </Linker>
          </li>  
        )
      })}
      {/* <SearchBar /> */}
    </Navcenter>
  )
}

export default NavCenter
