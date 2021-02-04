import React, { useState } from 'react';
import ModalContainer from '../Modal/ModalContainer';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';

const SignModal = ({ signModalOn, setSignModalOn, signMode, setSignMode }) => {
  const SignModalHeader = signMode === "signup" ? "회원가입" : "로그인";
  const SignModalChildren = 
    signMode === "signup" 
      ? <SignUpModal setSignMode={setSignMode} /> 
      : <SignInModal setSignMode={setSignMode} />;

  return (
    <ModalContainer width="550px" isModalOn={signModalOn} setIsModalOn={setSignModalOn}
      header={SignModalHeader}
    >
      {SignModalChildren}
    </ModalContainer>
  )
}

export default SignModal;
