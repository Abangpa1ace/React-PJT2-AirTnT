import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiGlobalLine, RiMenuLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { flexCenter, flexAlign } from '../../../styles/theme';

const NavRightWrapper = styled.div`
  ${flexAlign};
  justify-content: flex-end;
  width: 30%;

  & > button {
    margin: 0 0 0 20px;

    a { color: #ffffff; }
    svg { fill: #ffffff; }
  }

  .menu-btn-container {
    ${flexCenter};
    padding: 10px;
    background: #ffffff;
    border-radius: 21px;

    svg { 
      margin: 0 5px; 
      fill: ${(props) => props.theme.themeBlack}
    }
  }
`;

const NavRight = () => {
  return (
    <NavRightWrapper>
      <button>
        <Link to="/host">호스트 되기</Link>
      </button>
      <button>
        <RiGlobalLine />
      </button> 
      <button className="menu-btn-container">
        <RiMenuLine />
        <CgProfile />
      </button>
  </NavRightWrapper> 
  )
}

export default NavRight
