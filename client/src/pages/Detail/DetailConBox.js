import React from 'react'
import styled from 'styled-components';
import { Button } from '../../GlobalComponents/Common/StyledCommon';

const DetailConBox = ({ children, head }) => {
  return (
    <DetailContent>
      {head && <h4>{head}</h4>}
      {children}
    </DetailContent>
  )
}

const DetailContent = styled.article`
  width: 100%;
  padding: 36px 0;
  border-top: 1px solid ${({ theme }) => theme.gray1};

  h4 {
    margin: 0 0 15px;
  }

  button {
    font-weight: bold;
  }
`;

export default DetailConBox
