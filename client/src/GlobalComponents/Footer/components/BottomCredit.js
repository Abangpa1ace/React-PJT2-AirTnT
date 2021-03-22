import React from 'react';
import styled, { css } from 'styled-components';
import { useGlobalContext } from '../../../Context';
import { flexCenter } from '../../../styles/theme';
import { Linker } from '../../Common/StyledCommon';
import { FOOTERRIGHTSDATA } from '../FooterData';

const BottomCredit = () => {
  const { navFootWidth } = useGlobalContext();
  return (
    <Bottomcredit isFlex = {navFootWidth === "1600px"}>
      <div>© 2021 Airbnb, Inc. All rights reserved</div>
      <CreditList sFlex = {navFootWidth === "1600px"}>
        {FOOTERRIGHTSDATA.map((data, idx) => 
          <li key={data.id}>
            {idx !== 0 && <span>∙</span>}
            <Linker to={data.link}>{data.title}</Linker>
          </li>
        )}
      </CreditList>
    </Bottomcredit>
  )
}

const Bottomcredit = styled.div`
  ${({ isFlex }) => isFlex ? css`${flexCenter};` : css`display: block;` }

  div {
    margin: 0 15px 0 0;
  }
`;

const CreditList = styled.ul`
  ${flexCenter}
  margin: ${({ isFlex }) => isFlex ? "0px" : "5px 0 0"};
  span { margin: 0 5px; }
`

export default BottomCredit
