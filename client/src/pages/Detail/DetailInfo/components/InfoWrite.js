import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../../Context';
import DetailConBox from '../../common/DetailConBox';

const InfoWrite = () => {
  const { restDetail } = useGlobalContext();
  return (
    <DetailConBox>
      <WriteCon>
        {restDetail.introduce}
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
    cursor: pointer;
  }
`;

export default InfoWrite;