import React from 'react'
import styled from 'styled-components';
import { flexBetween } from '../../../../Styles/theme';

const InfoHeader = () => {
  return (
    <Infoheader>
      <div>
        <h4>Jae Hyun님이 호스팅하는 게스트 스위트 전체</h4>
        <p>최대 인원 2명 ∙ 침실 2개 ∙ 침대 1개 ∙ 욕실 1개</p>
      </div>
      <img src="/images/default3.jpg" alt="host-profile" />
    </Infoheader>
  )
}

const Infoheader = styled.header`
  ${flexBetween}
  padding: 0 0 24px;

  p {
    padding: 5px 0 0;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;

  }
`;

export default InfoHeader
