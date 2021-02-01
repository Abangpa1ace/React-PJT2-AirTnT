import React, { useEffect } from 'react'
import styled from 'styled-components';
import { flexCenter } from '../../Styles/theme';
import { Button } from '../Global/GlobalComponent';

const ModalContainer = ({ children, width, isModalOn, setIsModalOn, header }) => {

  useEffect(() => {
    document.body.style.overflow = (isModalOn ? 'hidden' : 'auto');
  }, [isModalOn])

  return (
    <ModalWrapper className={isModalOn ? 'visible' : ''}>
      <ModalBox width={width} className={isModalOn ? 'visible' : ''}>
        <ModalBoxHeader>
          <Button
            width="30px"
            height="30px"
            backgroundHov="#f4f4f4"
            fontSize="18px"
            onClick={() => setIsModalOn(false)}
          >X</Button>
          <h3>{header}</h3>
        </ModalBoxHeader>
        <ModalBoxContent>
          {children}
        </ModalBoxContent>
      </ModalBox>
      <ModalDimmer onClick={() => setIsModalOn(false)} />
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  ${flexCenter};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  visibility: hidden;
  z-index: 1000;
  
  &.visible {
    visibility: visible;
  }
`;

const ModalDimmer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
`;

const ModalBox = styled.div`
  min-width: 300px;
  min-height: 400px;
  width: ${({ width }) => width};
  background: #ffffff;
  border-radius: ${({ theme }) => theme.radius};
  transform: translateY(300px);
  opacity: 0;
  transition: all .4s ease;
  z-index: 1500;

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalBoxHeader = styled.header`
  position: relative;
  padding: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.gray1};
  text-align: center;

  h3 { font-size: 16px; }

  button {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const ModalBoxContent = styled.section`
  padding: 20px;
`;

export default ModalContainer;
