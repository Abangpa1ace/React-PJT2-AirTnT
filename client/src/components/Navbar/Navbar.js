import React, { useState, useEffect } from 'react';
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
  transition: all .2s ease;
  z-index: 500;

  ${(props) => 
    props.fixed &&
      css`
        position: fixed;
        top: 0;
        background: #aaaaaa;
      `
  }
`;

const NavContainer = styled.div`
  ${flexBetween};
  margin: 0 auto;
  width: ${(props) => props.theme.navWidth};
`;

export default function Navbar() {
  const [navFixed, setNavFixed] = useState(false);
  const [focus, setFocus] = useState(0);

  const handleNavFixed = () => {
    const { pageYOffset } = window;
    const isFixed = pageYOffset > 0;
    setNavFixed(isFixed);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavFixed);
    return () => window.removeEventListener('scroll', handleNavFixed);
  }, [])

  return (
    <Nav className="Navbar" fixed={navFixed}>
      <NavContainer >
        <NavLeft />
        <NavCenter focus={focus} changeFocus={setFocus} />
        <NavRight />
      </NavContainer>
    </Nav>
  )
}
