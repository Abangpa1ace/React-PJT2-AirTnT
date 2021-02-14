import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../Context';
import { Linker } from '../../Common/StyledCommon';
import { flexAlign } from '../../../Styles/theme';
import { NAVBARMENU } from '../NavbarData';

const SearchMenu = ({ navFocus, setNavFocus }) => {
  const { navFixed } = useGlobalContext();

  return (
    <MenuList>
      {NAVBARMENU.map((menu, idx) => {
        return (
          <MenuItem key={menu.id} fixed={navFixed} focused={idx === navFocus} 
            onClick={() => setNavFocus(idx)}>
            <Linker 
              to={menu.link}
              color={navFixed ? null : '#FFFFFF'}
              fontSize="initial">
              {menu.text}
            </Linker>
          </MenuItem>  
        )
      })}
    </MenuList>
  )
}

const MenuList = styled.ul`
  ${flexAlign}
`;

const MenuItem = styled.li`
  margin: 0 15px;
  border-bottom: ${({ focused }) => focused ? `2px solid #ffffff` : 'none'};

  &:hover a {
    color: ${({ theme }) => theme.gray1};
  }
`;

export default SearchMenu;
