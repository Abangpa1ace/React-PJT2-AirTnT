import React from 'react';
import { Linker } from '../../Common/StyledCommon';
import styled from 'styled-components';
import { NAVPROFMENU } from '../NavbarData';


const NavRightMenu = ({ setSignModalOn, setSignMode }) => {
  const signUpModal = () => {
    setSignMode('signup');
    setSignModalOn(true);
  }

  const signInModal = () => {
    setSignMode('signin');
    setSignModalOn(true);
  }

  return (
    <Profilemenu>
      <li key="0" onClick={signUpModal}>
        회원가입
      </li>
      <li key="1" onClick={signInModal}>
        로그인
      </li>
      {NAVPROFMENU.map(menu =>
        <li key={menu.id}>
          <Linker to={menu.link}>{menu.text}</Linker>
        </li>
      )}

    </Profilemenu>
  )
}

const Profilemenu = styled.ul`
  position: absolute;
  top: 50px;
  right: 0;
  width: 240px;
  padding: 10px 0;
  background: #ffffff;
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${({ theme }) => theme.shadowDiagonal};
  overflow: hidden;
  z-index: 600;

  li {
    padding: 15px 25px;
    text-align: left;
    &:hover { 
      background: ${(props) => props.theme.gray0};
    }
    &:nth-child(1) { font-weight: bold; }
    &:nth-child(2) { 
      border-bottom: 1px solid ${(props) => props.theme.gray1}
    }
  }
`;


export default NavRightMenu;
