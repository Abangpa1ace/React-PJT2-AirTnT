import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../../Context';
import RightsLeft from './RightsLeft';
import RightsRight from './RightsRight';
import { flexBetween } from '../../../Styles/theme';

const FooterRights = () => {
  const { navFootWidth } = useGlobalContext();
  return (
    <Footerrights width={navFootWidth}>
      <RightsLeft />
      <RightsRight />
    </Footerrights>
  )
}

const Footerrights = styled.div`
  ${flexBetween}
  width: ${({ width, theme }) => width || theme.webWidth};
  margin: 0 auto;
  padding: 24px 0;
`;

export default FooterRights
