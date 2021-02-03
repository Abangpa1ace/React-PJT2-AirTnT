import React, { useState } from 'react';
import ModalContainer from '../Modal/ModalContainer';
import { useGlobalContext } from '../../Context';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';

const SignModal = () => {
  const { signModalOn, setSignModalOn, signMode, setSignMode } = useGlobalContext();

  const signModalObject = {
    signin: {
      header: '로그인',
      children: <SignInModal setSignMode={setSignMode} />
    },
    signup: {
      header: '회원가입',
      children: <SignUpModal setSignMode={setSignMode} />
    },
  }

  return (
    <ModalContainer width="550px" isModalOn={signModalOn} setIsModalOn={setSignModalOn}
      header={!!signMode && signModalObject['signin'].header}
    >
      {!!signMode && signModalObject['signin'].children}
    </ModalContainer>
  )
}

export default SignModal;
