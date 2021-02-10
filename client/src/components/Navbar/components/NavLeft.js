import React from 'react';
import styled from 'styled-components';
import { Linker } from '../../Global/GlobalComponent';
import { useGlobalContext } from '../../../Context';
import { SiAirbnb } from 'react-icons/si';
import { flexAlign } from '../../../Styles/theme';

const NavLeft = () => {
  const { navFixed } = useGlobalContext();

  return (
    <Navleft navFixed={navFixed}>
      <Linker to="/">
        <SiAirbnb />
        <h2>airTnT</h2>
      </Linker>
    </Navleft>
  )
}

const Navleft = styled.div`
  width: 30%;
  a {
    ${flexAlign};

    h2 {
      padding-left: 5px;
      color: ${({ navFixed, theme }) => navFixed ? theme.themePink : '#ffffff'};
      font-size: 24px;
    };

    svg {
      fill: ${({ navFixed, theme }) => navFixed ? theme.themePink : '#ffffff'};
      font-size: 30px;
      transform: rotate(180deg);
    };
  }
`;

export default NavLeft;
