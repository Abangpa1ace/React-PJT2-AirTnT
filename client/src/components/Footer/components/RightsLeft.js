import React from 'react';
import styled, { css } from 'styled-components';
import { useGlobalContext } from '../../../Context';
import { flexCenter } from '../../../Styles/theme';
import { Linker } from '../../Global/GlobalComponent';
import { FOOTERRIGHTSDATA } from '../FooterData';

const RightsLeft = () => {
  const { navFootWidth } = useGlobalContext();
  return (
    <Rightsleft isFlex = {navFootWidth === "1600px"}>
      <div>© 2021 Airbnb, Inc. All rights reserved</div>
      <RightsLink>
        {FOOTERRIGHTSDATA.map((data, idx) => 
          <li key={data.id}>
            {idx !== 0 && <span>∙</span>}
            <Linker to={data.link}>{data.title}</Linker>
          </li>
        )}
      </RightsLink>
    </Rightsleft>
  )
}

const Rightsleft = styled.div`
  ${({ isFlex }) => isFlex ? css`${flexCenter};` : css`display: block;` }
`;

const RightsLink = styled.ul`
  ${flexCenter}
  margin: 5px 0 0;
  span { margin: 5px; }
`

export default RightsLeft
