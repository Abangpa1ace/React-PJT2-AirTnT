import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import { flexAlign } from '../../../styles/theme';
import { NAVBARMENU } from '../NavbarData';

const NavCenterWrapper = styled.div`
  position: relative;
  ul {
    ${flexAlign}

    li {
      margin: 0 15px;

      a {
        color: #ffffff;
        font-size: initial;
        &:hover { 
          color: lightgray; 
        }
      }
      &.focus a { border-bottom: 1px solid #ffffff; }
    }
  }
`;


const NavCenter = ({ focus, changeFocus }) => {
  return (
    <NavCenterWrapper>
      <ul>
        {NAVBARMENU.map((menu, idx) => {
          return (
            <li key={menu.key} className={idx === focus ? 'focus' : ''} onClick={() => changeFocus(idx)}>
              <Link to={menu.link}>{menu.text}</Link>
            </li>  
          )
        })}
      </ul>
      <SearchBar />
    </NavCenterWrapper>
  )
}

export default NavCenter
