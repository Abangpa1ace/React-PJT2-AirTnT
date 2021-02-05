import React from 'react';
import { useGlobalContext } from '../../Context';
import styled, { css } from 'styled-components';
import NavLeft from './components/NavLeft';
import NavCenter from './components/NavCenter';
import NavRight from './components/NavRight';
import { flexAlign } from '../../Styles/theme';


const Navbar = () => {
  const { navFixed, searchOn } = useGlobalContext();

  return (
    <Nav fixed={navFixed} >
      <NavContainer fixed={navFixed} searchOn={searchOn}>
        <NavLeft />
        <NavCenter />
        <NavRight />
      </NavContainer>
    </Nav>
  )
}

export default Navbar;

const Nav = styled.nav`
  ${flexAlign};
  position: absolute;
  width: 100%;
  padding: 12px;
  z-index: 200;

  ${({ fixed }) => fixed &&
    css`
      position: fixed;
      top: 0;
      background: #ffffff;
      box-shadow: ${({ theme }) => theme.shadowDown};
    `
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ searchOn }) => !searchOn ? 'center' : 'flex-start'};
  width: ${({ theme }) => theme.webWidth};
  padding: ${({ searchOn }) => !searchOn ? 'none' : '30px 0 10px'};
  margin: 0 auto;
`;
