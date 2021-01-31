import React, { useState } from 'react';
// import styled from 'styled-components';
import ModalContainer from '../Modal/ModalContainer';
import { useGlobalContext } from '../../Context';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';

const SignModal = () => {
  const { signModalOn, setSignModalOn } = useGlobalContext();
  const [signMode, setSignMode] = useState('signin');

  return (
    <ModalContainer width="550px" isModalOn={signModalOn} setIsModalOn={setSignModalOn}
      header={signMode === 'signin' ? '로그인' : '회원가입'}
    >
      {signMode === 'signin' && <SignInModal setSignMode={setSignMode} />}
    </ModalContainer>
  )
}

export default SignModal
