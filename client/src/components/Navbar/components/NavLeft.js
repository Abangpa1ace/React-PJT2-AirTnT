import React from 'react';
import { useGlobalContext } from '../../../Context';
import { Linker } from '../../Global/GlobalComponent';
import styled from 'styled-components';

const Navleft = styled.div`
  width: 30%;
`;

const NavLeft = () => {
  const { navFixed } = useGlobalContext();
  return (
    <Navleft>
      <h2>
        <Linker 
          to="/" 
          color={(props) => navFixed ? props.theme.themePink : '#ffffff'}
          fontSize="24px">
          airbnd
        </Linker>
      </h2>
    </Navleft>
  )
}

export default NavLeft;
