import React from 'react'
import styled from 'styled-components'
import RightsLeft from './RightsLeft';
import RightsRight from './RightsRight';
import { flexBetween } from '../../../Styles/theme';

const Footerrights = styled.div`
  ${flexBetween}
  width: ${(props) => props.theme.webWidth};
  margin: 0 auto;
  padding: 24px 0;
`;

const FooterRights = () => {
  return (
    <Footerrights>
      <RightsLeft />
      <RightsRight />
    </Footerrights>
  )
}

export default FooterRights
