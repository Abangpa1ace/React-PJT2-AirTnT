import React from 'react'
import styled from 'styled-components';
import FooterLinks from './components/FooterLinks';
import FooterRights from './components/FooterRights';

const Foot = styled.footer`
  background: ${({ theme }) => theme.gray0};
  border-top: 2px solid ${({ theme }) => theme.gray1};
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