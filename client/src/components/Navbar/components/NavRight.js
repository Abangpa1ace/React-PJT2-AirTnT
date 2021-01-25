import React, { useState } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../../Context';
import { Linker, Button } from '../../Global/GlobalComponent';
import ProfileMenu from './ProfileMenu';
import { RiGlobalLine, RiMenuLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { flexCenter, flexAlign } from '../../../styles/theme';

const NavRightWrapper = styled.div`
  ${flexAlign};
  justify-content: flex-end;
  width: 30%;
`;

const MenuButton = styled.div`
  ${flexCenter};
  position: relative;
  padding: 10px;
  margin: 0 0 0 10px;
  background: #ffffff;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;

  svg { 
    margin: 0 5px; 
    fill: ${(props) => props.theme.themeBlack}
  }
`;

const NavRight = () => {
  const { navFixed } = useGlobalContext();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <NavRightWrapper>
      <Button padding="15px" background2='rgba(255, 255, 255, 0.1)'>
        <Linker 
          to="/host" 
          color={navFixed ? null : '#FFFFFF'}>
          호스트 되기
        </Linker>
      </Button>
      <Button padding="15px" background2='rgba(255, 255, 255, 0.1)'>
        <RiGlobalLine fill={navFixed ? 'black' : '#ffffff'} />
      </Button> 
      <MenuButton onClick={() => setShowMenu(!showMenu)}>
        <RiMenuLine />
        <CgProfile />
        {showMenu && <ProfileMenu />}
      </MenuButton>
  </NavRightWrapper> 
  )
}

export default NavRight
