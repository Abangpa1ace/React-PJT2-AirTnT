import React, { useState } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../../Context';
import { Linker, Button } from '../../Global/GlobalComponent';
import ProfileMenu from './ProfileMenu';
import { RiGlobalLine, RiMenuLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { flexCenter, flexAlign } from '../../../Styles/theme';
import SignModal from '../../../Components/SignModal/SignModal';

const NavRight = () => {
  const { navFixed } = useGlobalContext();
  const [showMenu, setShowMenu] = useState(false);
  const [signModalOn, setSignModalOn] = useState(false);
  const [signMode, setSignMode] = useState('signup');

  return (
    <NavRightWrapper>
      <Button padding="15px" backgroundHov='rgba(255, 255, 255, 0.1)'>
        <Linker 
          to="/host"
          color={navFixed ? null : '#FFFFFF'}>
          호스트 되기
        </Linker>
      </Button>
      <Button padding="15px" backgroundHov='rgba(255, 255, 255, 0.1)'>
        <RiGlobalLine fill={navFixed ? 'black' : '#ffffff'} />
      </Button> 
      <MenuButton fixed={navFixed} onClick={() => setShowMenu(!showMenu)}>
        <RiMenuLine />
        <CgProfile />
        {showMenu && <ProfileMenu setSignModalOn={setSignModalOn} setSignMode={setSignMode} />}
      </MenuButton>
      <SignModal signModalOn={signModalOn} setSignModalOn={setSignModalOn} signMode={signMode} setSignMode={setSignMode} />
    </NavRightWrapper> 
  )
}

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
  box-shadow: ${({ fixed, theme}) => fixed && theme.shadowDiagonal};


  svg { 
    margin: 0 5px; 
    fill: ${({ theme }) => theme.themeBlack}
  }
`;

export default NavRight
