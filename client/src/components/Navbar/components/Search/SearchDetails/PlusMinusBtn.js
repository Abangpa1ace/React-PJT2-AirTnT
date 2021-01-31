import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../../../../styles/theme';

const PlusMinusBtn = ({ children, condition, clickEvent }) => {
  return (
    <StyledBtn
      onClick={clickEvent}
      disabled={condition}>
      {children}
    </StyledBtn>
  )
}

const StyledBtn = styled.button`
  ${flexCenter};
  width: 32px;
  height: 32px;
  color: ${({ disabled, theme }) => disabled ? theme.gray1 : theme.gray2};
  border: 1px solid ${({ disabled, theme }) => disabled ? theme.gray1 : theme.gray2};
  border-radius: 50%;
  font-size: 28px;

  &:hover {
  border: 1px solid ${({ theme }) => theme.themeBlack};
  color: ${({ theme }) => theme.themeBlack};
  }
`;

export default PlusMinusBtn;

