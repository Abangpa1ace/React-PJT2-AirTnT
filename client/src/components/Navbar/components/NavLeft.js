import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLeftWrapper = styled.div`
  width: 30%;
  a {
    font-size: 24px;
    color: #ffffff;
  }
`;

const NavLeft = () => {
  return (
    <NavLeftWrapper>
      <h2>
        <Link to="/">airbnb</Link>
      </h2>
    </NavLeftWrapper>
  )
}

export default NavLeft;
