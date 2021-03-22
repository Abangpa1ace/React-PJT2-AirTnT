import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../../../Context';
import { flexBetween } from '../../../../styles/theme';

const InfoHeader = () => {
  const { restDetail } = useGlobalContext();
  const { host, category, mainInfo } = restDetail;

  return (
    <Infoheader>
      <div>
        <h4>{`${host && host.name}님이 호스팅하는 ${category && category.building} ${category && category.type}`}</h4>
        <p>{mainInfo && `최대 인원 ${mainInfo.maxGuest}명 ∙ 침실 ${mainInfo.bedroom}개 ∙ 침대 ${mainInfo.bed}개 ∙ 욕실 ${mainInfo.bathroom}개`}</p>
      </div>
      <img src={host && host.img} alt="host-profile" />
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
