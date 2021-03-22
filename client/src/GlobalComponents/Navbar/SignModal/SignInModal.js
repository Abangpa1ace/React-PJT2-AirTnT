import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from '../../Common/StyledCommon';
import { SignInAPI } from '../../../data/config';

const SignInModal = ({ setSignModalOn, setSignMode }) => {
  const [signInValue, setSignInValue] = useState({
    email: '',
    password: '',
  })
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [signInValid, setSignInValid] = useState({
    emailValid: true,
    passwordValid: true,
  })

  const updateInput = (e) => {
    const { name, value } = e.target;
    setSignInValue({
      ...signInValue,
      [name]: value,
    })
  }

  const submitSignIn = (e) => {
    e.preventDefault();
    const { email, password } = signInValue;
    const checkReqObj = checkRequest(email, password);
    setSignInValid(checkReqObj);

    if (!Object.values(checkReqObj).includes(false)) {
      fetch(SignInAPI, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInValue),
      })
        .then((response) => response.json())
        .then((result) => {
          checkResponse(result);
        })
    }
  }

  const checkRequest = (emailVal, passwordVal) => {
    const emailRegex = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const isValidEmail = emailRegex.test(emailVal);
    const isValidPassword = passwordVal.length >= 8;
    return {
      emailValid: isValidEmail,
      passwordValid: isValidPassword,
    }
  }

  const checkResponse = (result) => {
    const { success, message, token } = result;
    if (!success) {
      let alertMessage = '';
      switch(message) {
        case 'Undefined Value Exist':
          alertMessage = '입력하지 않은 값이 존재합니다.';
          break;
        case 'Not Existing Email':
          alertMessage = '존재하지 않는 이메일입니다.';
          break;
        case 'Unmatched Password':
          alertMessage = '비밀번호가 일치하지 않습니다.';
          break;
        default :
          alertMessage = '알 수 없는 에러가 발생했습니다.';
          break;
      }
      alert(alertMessage);
    }
    else {
      if (message === 'Success' && token) {
        localStorage.setItem("token", token);
        setSignModalOn(false);
        alert('로그인 성공!')
      }
      else {
        alert('서버 오류가 발생했습니다. 잠시 후에 접속해주세요.')
      }
    }
  }

  return (
    <>
      <SignInForm onSubmit={(e) => submitSignIn(e)}>
        <SignInInputEmail 
          type="text"
          name="email"
          value={signInValue.email}
          isValid={signInValid.emailValid}
          onChange={(e) => updateInput(e)}
          placeholder="이메일"
        />
        <SingInPwdCon>
          <SignInInputPwd
            type={isPwdShown ? 'text' : 'password'}
            name="password"
            value={signInValue.password}
            isValid={signInValid.passwordValid}
            onChange={(e) => updateInput(e)}
            placeholder="비밀번호" 
          />
          <span onClick={() => setIsPwdShown(!isPwdShown)}>
            {isPwdShown ? '숨기기' : '표시'}
          </span>
        </SingInPwdCon>
        {!signInValid.emailValid && 
          <SignInValidMsg>⚠︎ 유효하지 않은 이메일입니다.</SignInValidMsg>}
        {!signInValid.passwordValid && 
          <SignInValidMsg>⚠︎ 비밀번호는 최소 8자 이상입니다.</SignInValidMsg>}
        <Button 
          width="100%"
          type="submit"
          margin="10px auto"
          padding="15px 0"
          color="#ffffff"
          background={({ theme }) => theme.themePink}
          radius="10px"
          fontSize="16px"
          >로그인
        </Button>
      </SignInForm>
      <Divider><span>또는</span></Divider>
      <SignInSocial>
        <Button
          width="100%"
          margin="15px auto"
          padding="15px 0"
          border={({ theme }) => theme.gray2}
          color={({ theme }) => theme.themeBlack}
          radius="10px"
        >kakao로 로그인하기</Button>
        <Button
          width="100%"
          margin="15px auto"
          padding="15px 0"
          border={({ theme }) => theme.gray2}
          color={({ theme }) => theme.themeBlack}
          radius="10px"
        >구글로 로그인하기</Button>
        <Button
          width="100%"
          margin="15px auto"
          padding="15px 0"
          border={({ theme }) => theme.gray2}
          color={({ theme }) => theme.themeBlack}
          radius="10px"
        >Apple 계정으로 계속하기</Button>
      </SignInSocial>
      <SignInMsg>
        <strong>비밀번호를 잊으셨나요?</strong>
        <span>에어비앤비 계정이 없으세요? 
          <strong onClick={() => setSignMode('signup')}>회원가입</strong>
        </span>
      </SignInMsg>
    </>
  )
}

const SignInForm = styled.form`
  padding: 10px 0 0 0;

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

const SignInInputEmail = styled.input`
  width: 100%;
  padding: 20px 10px;
  border: ${({ isValid, theme }) => isValid ? `1px solid ${theme.gray1}` : `2px solid ${theme.themeWarning}`};
  border-radius: 10px 10px 0 0;
  font-size: 16px;
  &:focus, &:active {
    border: 2px solid;
    border-color: ${({ isValid, theme }) => isValid ? theme.themeBlack : theme.themeWarning};
  } 
`;

const SingInPwdCon = styled.div`
  position: relative;
  margin: 0 0 10px 0;

  span {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SignInInputPwd = styled.input`
  width: 100%;
  padding: 20px 10px;
  border: ${({ isValid, theme }) => isValid ? `1px solid ${theme.gray1}` : `2px solid ${theme.themeWarning}`};
  border-top: ${({ isValid, theme }) => isValid ? 0 : `1px solid ${theme.themeWarning}`};
  border-radius: 0 0 10px 10px;
  font-size: 16px;
  &:focus, &:active {
    border: 2px solid;
    border-color: ${({ isValid, theme }) => isValid ? theme.themeBlack : theme.themeWarning};
  } 
`;

const SignInValidMsg = styled.p`
  padding: 5px 0;
  color: ${({ theme }) => theme.themeWarning};
  font-size: 12px;
`;

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
  }
`;

const SignInSocial = styled.section`
  margin: 0 0 30px 0;

  button:hover {
    border: 2px solid ${({ theme }) => theme.themeBlack};
  }
`;

const SignInMsg = styled.footer`
  span {
    display: block;
    margin: 15px 0 0;
    color: ${({ theme }) => theme.gray2};
  }

  strong {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default SignInModal;
