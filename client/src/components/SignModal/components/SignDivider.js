import React from 'react'
import styled from 'styled-components';

const SignDivider = () => {
  return (
    <Divider><span>또는</span></Divider>
  )
}

const Divider = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  margin: 30px 0;
  background: ${({ theme }) => theme.gray1};

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    padding: 5px 10px;
    background: #ffffff;
    color: ${({ theme }) => theme.gray2};
    font-size: 14px;
  }
`;

export default SignDivider
