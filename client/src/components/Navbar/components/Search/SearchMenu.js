import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../../Context';
import { Linker } from '../../../Global/GlobalComponent';
import { flexAlign } from '../../../../styles/theme';
import { NAVBARMENU } from '../../NavbarData';

const MenuList = styled.ul`
  ${flexAlign}

  li {
    margin: 0 15px;
    &.focus a { border-bottom: 1px solid #ffffff; }
  }
`;

const SearchMenu = ({ focus, changeFocus }) => {
  const { navFixed } = useGlobalContext();

  return (
    <MenuList>
      {NAVBARMENU.map((menu, idx) => {
        return (
          <li key={menu.id} className={idx === focus ? 'focus' : ''} 
            onClick={() => changeFocus(idx)}>
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
    </MenuList>
  )
}

export default SearchMenu
