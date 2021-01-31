import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../../styles/theme';
import { Linker } from '../../Global/GlobalComponent';
import { FOOTERRIGHTSDATA } from '../FooterData';

const Rightsleft = styled.ul`
  ${flexCenter};
  span { margin: 5px; }
`;

const RightsLeft = () => {
  return (
    <Rightsleft>
      <div>© 2021 Airbnb, Inc. All rights reserved</div>
      {FOOTERRIGHTSDATA.map((data) => 
        <li key={data.id}>
          <span>∙</span>
          <Linker to={data.link}>{data.title}</Linker>
        </li>
      )}
    </Rightsleft>
  )
}

export default RightsLeft
