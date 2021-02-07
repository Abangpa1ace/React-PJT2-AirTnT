import React from 'react'
import styled from 'styled-components';
import { Button } from '../../../../Components/Global/GlobalComponent';
import { flexBetween, flexAlign } from '../../../../Styles/theme';
import { BsStarFill, BsHeart, BsUpload } from 'react-icons/bs';

const HeaderLinks = () => {
  return (
    <Headerlinks>
      <HeaderLinkLeft>
        <BsStarFill /><strong>&nbsp;4.83</strong><span>&nbsp;(60)</span>
        <span>&ensp;∙&ensp;</span>
        <p>Mangwon 1(il)-dong, Mapo-gu, 서울, 한국</p>
      </HeaderLinkLeft>
      <HeaderLinkRight>
        <Button
          padding="5px 10px"
          backgroundHov={({ theme }) => theme.gray0}
          radius="5px"
        >
          <BsUpload />
          <span>공유하기</span>
        </Button>
        <Button
          padding="5px 10px"
          margin="0 0 0 5px"
          backgroundHov={({ theme }) => theme.gray0}
          radius="5px"
        >
          <BsHeart />
          <span>저장</span>
        </Button>
      </HeaderLinkRight>
    </Headerlinks>
  )
}

const Headerlinks = styled.section`
  ${flexBetween};
  padding: 5px 0;
`;

const HeaderLinkLeft = styled.div`
  ${flexAlign};

  svg {
    width: 15px;
    fill: ${({ theme }) => theme.themePink };
    transform: translateY(-1px);
  }

  span {
    color: ${({ theme }) => theme.gray2};
  }

  p {
    color: ${({ theme }) => theme.gray2};
    font-weight: 600;
    text-decoration: underline;
  }
`;

const HeaderLinkRight = styled.div`
  ${flexAlign}

  button {
    svg {
      width: 15px;
      margin: 0 10px 0 0;
      fill: ${({ theme }) => theme.themeBlack };
    }
    span {
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

export default HeaderLinks
