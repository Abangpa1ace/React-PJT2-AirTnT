import React from 'react';
import styled from 'styled-components';

const SignModalInput = ({ type, name, isValid, value, onChange, placeholder, radius, borderTopNone }) => {
  return (
    <SignInput 
      type={type}
      name={name}
      isValid={isValid}
      value={value}
      onChange={onChange}
      placeholder={placeholder} 
      radius={radius}
      borderTopNone={borderTopNone}
    />
  )
}

const SignInput = styled.input`
  width: 100%;
  padding: 20px 10px;
  border: ${({ isValid, theme }) => isValid ? `1px solid ${theme.gray1}` : `2px solid ${theme.themeWarning}`};
  border-radius: ${({ radius }) => radius || '10px'};
  font-size: 16px;
  border-top: ${({ borderTopNone }) => borderTopNone && 0};
  &:focus, &:active {
    border: 2px solid;
    border-color: ${({ isValid, theme }) => isValid ? theme.themeBlack : theme.themeWarning};
  } 
`;

export default SignModalInput;
