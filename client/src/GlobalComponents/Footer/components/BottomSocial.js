import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexCenter, flexAlign } from '../../../Styles/theme';
import { RiGlobalLine, RiFacebookFill, RiTwitterFill } from 'react-icons/ri';
import { BiWon } from 'react-icons/bi';
import { ImInstagram } from 'react-icons/im';
import { NAVERBLOGSVG, NAVERPOSTSVG } from '../../../Data/config';

const BottomSocial = () => {
  return (
    <Bottomsocial>
      <SocialList>
        <li><RiGlobalLine /><span>한국어</span></li>
        <li><BiWon /><span>KRW</span></li>
      </SocialList>
      <SocialList>
        <li><Link to='/'><RiFacebookFill /></Link></li>
        <li><Link to='/'><RiTwitterFill /></Link></li>
        <li><Link to='/'><ImInstagram /></Link></li>
        <li><Link to='/'>{NAVERBLOGSVG}</Link></li>
        <li><Link to='/'>{NAVERPOSTSVG}</Link></li>
      </SocialList>
    </Bottomsocial>
  )
}

const Bottomsocial = styled.div`
  ${flexAlign};
`;

const SocialList = styled.ul`
  ${flexCenter};
  margin: 0 0 0 30px;

  li {
    ${flexAlign};
    margin: 0 0 0 20px;

    span {
      margin-left: 5px;
      font-weight: 500;
      text-decoration: underline;
      cursor: pointer;
      &:hover { color: ${(props) => props.theme.gray2}; }
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export default BottomSocial
