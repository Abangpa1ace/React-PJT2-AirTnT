import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../Context'

const SignModal = () => {
  const { SignModalMode, setSignModalMode } = useGlobalContext();
  return (
    <ModalContainer>
      
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.4);
`;

export default SignModal;
