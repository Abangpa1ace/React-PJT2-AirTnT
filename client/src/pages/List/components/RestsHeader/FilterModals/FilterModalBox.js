import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../Components/Global/GlobalComponent';
import { flexBetween } from '../../../../../Styles/theme';

const FilterModalBox = ({ children, width, onClickDelete }) => {
  return (
    <ModalBox width={width}>
      {children}
      <ModalControl>
        <p onClick={onClickDelete}>지우기</p>
        <Button
          padding="10px 15px"
          color="#ffffff"
          background={({ theme }) => theme.themeBlack}
          backgroundHov="#000000"
        >저장</Button>
      </ModalControl>
    </ModalBox>
  )
}

const ModalBox = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: ${({ width }) => width};
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.gray1};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.gray1};
  border-radius: 10px;
  z-index: 300;
`;

const ModalControl = styled.footer`
  ${flexBetween};
  padding: 15px;
  border-top: 1px solid ${({ theme }) => theme.gray1};

  p {
    color: ${({ theme }) => theme.gray2};
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default FilterModalBox

