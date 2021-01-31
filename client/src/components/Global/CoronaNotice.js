import React from 'react';
import styled from 'styled-components';
import {flexCenter} from '../../styles/theme';

const CoronaNotice = () => {
  return (
    <HeadNotice>
      <a href="/corona">에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</a>
    </HeadNotice>
  )
}

export default CoronaNotice;

const HeadNotice = styled.div`
  ${flexCenter};
  height: 60px;
  background: #000000;

  a {
    color: #ffffff;
    text-decoration: underline;
  }
`;