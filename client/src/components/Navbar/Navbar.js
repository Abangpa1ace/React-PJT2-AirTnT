import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../Context';
import styled, { css } from 'styled-components';
import NavLeft from './components/NavLeft';
import NavCenter from './components/NavCenter';
import NavRight from './components/NavRight';
import { flexBetween, flexAlign } from '../../styles/theme';


const Nav = styled.nav`
  ${flexAlign};
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: transparent;
  transition: all .2s ease;
  z-index: 500;
  border: 1px solid green;

  ${({ fixed }) => fixed &&
    css`
      background: #ffffff;
    `
  }
`;

const NavContainer = styled.div`
  ${flexBetween};
  width: ${(props) => props.theme.webWidth};
  height: 40px;
  margin: 0 auto;
  border: 1px solid blue;
`;

export default function Navbar() {
  const { navFixed, handleNavFixed } = useGlobalContext();
  const [searchFocus, setSearchFocus] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleNavFixed);
    return () => window.removeEventListener('scroll', handleNavFixed);
  }, [])

  return (
    <Nav fixed={navFixed}>
      <NavContainer>
        <NavLeft />
        <NavCenter focus={searchFocus} changeFocus={setSearchFocus} />
        <NavRight />
      </NavContainer>
    </Nav>
  )
}