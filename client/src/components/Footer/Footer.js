import React from 'react'
import styled from 'styled-components';
import FooterLinks from './components/FooterLinks';
import FooterRights from './components/FooterRights';

const Foot = styled.footer`
  margin-top: 30px;   // delete later
  background: ${(props) => props.theme.gray0};
  border-top: 2px solid ${(props) => props.theme.gray1};
`;

const Footer = () => {
  return (
    <Foot>
      <FooterLinks />
      <FooterRights />
    </Foot>
  )
}

export default Footer;