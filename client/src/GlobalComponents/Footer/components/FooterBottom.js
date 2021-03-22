import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../../Context';
import BottomCredit from './BottomCredit';
import BottomSocial from './BottomSocial';
import { flexBetween } from '../../../styles/theme';

const FooterBottom = () => {
  const { navFootWidth } = useGlobalContext();
  return (
    <Footerbottom width={navFootWidth}>
      <BottomCredit />
      <BottomSocial />
    </Footerbottom>
  )
}

const Footerbottom = styled.div`
  ${flexBetween}
  width: ${({ width, theme }) => width || theme.webWidth};
  margin: 0 auto;
  padding: 24px 0;
`;

export default FooterBottom
