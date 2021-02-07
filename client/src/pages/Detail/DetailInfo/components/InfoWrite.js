import React from 'react';
import styled from 'styled-components';
import DetailConBox from '../../DetailConBox';

const InfoWrite = () => {
  return (
    <DetailConBox>
      <WriteCon>
        {
`기원을 담아,
망원역 한켠에 Nude Quatro를 오픈했습니다.

소중한 사람과 함께하는 공간이 되었으면 좋겠습니다.

Instagram: @Nude_Quatro

a.숙소
- 망원역에서 3분거리에 위치해 있으며, 근처에는 조용한 카페들과 망원시장이 있습니다.

- 오픈전 리모델링을 해서 깨끗하고 편안합니다.

- 침실과 작은 테이블이 있는 큰방, 최대 6명까지 둘러 앉아, 함께 저녁을 먹으며 이야기를 할 수 있는 작은 방으로 이루어져 있습니다. (이웃 주민들을 위해 10시 이후에는 작은 소리로 대화 해주세요.)
*코로나 확산 방지를 위해 한시적으로 예약 최대 인원을 4인으로 제한합니다.`
        }
        <p>호스트한테 연락하기</p>
      </WriteCon>
    </DetailConBox>
  )
}

const WriteCon = styled.pre`
  width: 100%;
  font-size: 16px;
  font-family: initial;
  line-height: 1.5;
  white-space: pre-line;
  overflow: hidden;

  p {
    margin: 30px 0 0;
    font-weight: bold;
    text-decoration: underline;
  }
`;

export default InfoWrite;