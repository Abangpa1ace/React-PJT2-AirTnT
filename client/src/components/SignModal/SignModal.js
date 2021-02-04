import React from 'react';
import ModalContainer from '../Modal/ModalContainer';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';

const SignModal = ({ signModalOn, setSignModalOn, signMode, setSignMode }) => {
  const signModalObj = {
    signup : {
      header: "회원가입",
      child:  <SignUpModal setSignMode={setSignMode} setSignModalOn={setSignModalOn} />,
    }, 
    signin : {
      header: "로그인",
      child: <SignInModal setSignMode={setSignMode} setSignModalOn={setSignModalOn} />,
    },
  }

  return (
    <ModalContainer width="550px" isModalOn={signModalOn} setIsModalOn={setSignModalOn}
      header={signModalObj[signMode].header}
    >
      {signModalObj[signMode].child}
    </ModalContainer>
  )
}

export default SignModal;
