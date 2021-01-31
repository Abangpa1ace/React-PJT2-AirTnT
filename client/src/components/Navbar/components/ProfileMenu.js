import React from 'react';
import { Linker } from '../../Global/GlobalComponent';
import styled from 'styled-components';
import { NAVPROFMENU } from '../NavbarData';
import { useGlobalContext } from '../../../Context';

const ProfileMenu = () => {
  const { setSignModalOn } = useGlobalContext();
  
  return (
    <Profilemenu>
      {NAVPROFMENU.map((menu) => 
        <li key={menu.id} onClick={() => setSignModalOn(true)}>
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


export default ProfileMenu;
