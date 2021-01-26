import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../Context';
import styled, { css } from 'styled-components';
import NavLeft from './components/NavLeft';
import NavCenter from './components/NavCenter';
import NavRight from './components/NavRight';
import { flexBetween } from '../../styles/theme';


const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background: transparent;
  box-shadow: 0px 3px 5px 0px ${({ theme }) => theme.gray1};
  transition: all .2s ease;
  z-index: 500;

  ${({ fixed }) => fixed &&
    css`
      position: fixed;
      top: 0;
      background: #ffffff;
    `
  }
`;

const NavContainer = styled.div`
  ${flexBetween};
  margin: 0 auto;
  width: ${(props) => props.theme.webWidth};
`;

export default function Navbar() {
  const { navFixed, handleNavFixed } = useGlobalContext();
  const [focus, setFocus] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleNavFixed);
    return () => window.removeEventListener('scroll', handleNavFixed);
  }, [handleNavFixed])

  return (
    <Nav fixed={navFixed}>
      <NavContainer>
        <NavLeft />
        <NavCenter focus={focus} changeFocus={setFocus} />
        <NavRight />
      </NavContainer>
    </Nav>
  )
}