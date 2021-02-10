import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from '../../Common/StyledCommon';
import SignModalInput from './components/SignModalInput';
import SignDivider from './components/SignDivider';
import { SignUpAPI } from '../../../Data/config';

const SignUpModal = ({ setSignModalOn, setSignMode }) => {
  const [signUpValue, setSignUpValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [signUpValid, setSignUpValid] = useState({
    firstNameValid: true,
    lastNameValid: true,
    emailValid: true,
    passwordValid: true,
  })

  const updateInput = (e) => {
    const { name, value } = e.target;
    setSignUpValue({
      ...signUpValue,
      [name]: value,
    })
  }

  const submitSignUp = (e) => {
    e.preventDefault();
    const checkReqObj = checkRequest(signUpValue);
    setSignUpValid(checkReqObj);

    if (!Object.values(checkReqObj).includes(false)) {
      fetch(SignUpAPI, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpValue),
      })
        .then((response) => response.json())
        .then((result) => {
          checkResponse(result);
        })
    }
  }

  const checkRequest = (values) => {
    const { firstName, lastName, email, password } = values;
    const regexNotKor =  /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    const regexEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;

    return {
      firstNameValid: !regexNotKor.test(firstName),
      lastNameValid: !regexNotKor.test(lastName),
      emailValid: regexEmail.test(email),
      password: regexPwd.test(password),
    }
  }

  const checkResponse = (result) => {
    const { success, message } = result;
    if (!success) {
      let alertMessage = '';
      switch(message) {
        case 'Undefined Value Exist':
          alertMessage = '입력하지 않은 값이 존재합니다.';
          break;
        case 'Not Valid Name':
          alertMessage = '이름과 성을 확인해주세요.';
          break;
        case 'Not Valid Email':
          alertMessage = '부적절한 이메일 형식입니다.';
          break;
        case 'Already Existing Email':
          alertMessage = '이미 사용중인 이메일입니다.';
          break;
        case 'Not Valid Password':
          alertMessage = '부적절한 비밀번호 형식입니다.';
          break;
        default :
          alertMessage = '알 수 없는 에러가 발생했습니다.';
          break;
      }
      alert(alertMessage);
    }
    else {
      if (message === 'Success') {
        alert('가입 성공!');
        setSignModalOn(false);
      }
      else {
        alert('서버 오류가 발생했습니다. 잠시 후에 접속해주세요.')
      }
    }
  }

  const { firstName, lastName, email, password } = signUpValue;
  const { firstNameValid, lastNameValid, emailValid, passwordValid } = signUpValid;

  return (
    <>
      <SignUpForm onSubmit={(e) => submitSignUp(e)}>
        <SignUpInputWrapper>
          <SignModalInput
            type="text"
            name="firstName"
            isValid={firstNameValid}
            value={firstName}
            onChange={(e) => updateInput(e)}
            placeholder="이름(예: 길동)"
            radius="10px 10px 0 0"
          />
          <SignModalInput
            type="text"
            name="lastName"
            isValid={lastNameValid}
            value={lastName}
            onChange={(e) => updateInput(e)}
            placeholder="성(예: 홍)"
            radius="0 0 10px 10px"
            borderTopNone
          />
          <ValidMsg 
            isValid={firstNameValid && lastNameValid}>
            {firstNameValid && lastNameValid
              ? '정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.'
              : '⚠︎ 이름이 올바른지 확인하세요'
            }
          </ValidMsg>
        </SignUpInputWrapper>
        <SignUpInputWrapper>
          <SignModalInput
            type="text"
            name="email"
            isValid={emailValid}
            value={email}
            onChange={(e) => updateInput(e)}
            placeholder="이메일"
          />
          <ValidMsg 
            isValid={emailValid}>
            {emailValid
              ? '예약 확인과 영수증을 이메일로 보내드립니다.'
              : '⚠︎ 유효하지 않은 이메일입니다.'
            }
          </ValidMsg>
        </SignUpInputWrapper>
        <SignUpInputWrapper>
          <SignModalInput
            type={isPwdShown ? 'text' : 'password'}
            name="password"
            isValid={passwordValid}
            value={password}
            onChange={(e) => updateInput(e)}
            placeholder="비밀번호"
          />
          <ValidMsg 
            isValid={passwordValid}>
            {passwordValid
              ? ''
              : '⚠︎ 비밀번호는 8-15자 사이의 영문/숫자/특수문자 형식입니다.'
            }
          </ValidMsg>
          <span onClick={() => setIsPwdShown(!isPwdShown)}>
            {isPwdShown ? '숨기기' : '표시'}
          </span>
        </SignUpInputWrapper>
        <SignUpLaws>
          아래의 
          <strong> 동의 및 계속하기 </strong> 
          버튼을 선택하면, 에어비앤비의 
          <a href="/"> 서비스 약관</a>, 
          <a href="/"> 결제 서비스 약관</a>, 
          <a href="/"> 개인정보 처리방침</a>, 
          <a href="/"> 차별 금지 정책</a>에 동의하는 것입니다.
        </SignUpLaws>
        <Button 
          width="100%"
          type="submit"
          margin="10px auto"
          padding="15px 0"
          color="#ffffff"
          background={({ theme }) => theme.themePink}
          radius="10px"
          fontSize="16px"
          >동의 및 계속하기
        </Button>
      </SignUpForm>
      <SignDivider />
      <SignUpSocial>
        <Button
          width="100%"
          margin="15px auto"
          padding="15px 0"
          border={({ theme }) => theme.gray2}
          color={({ theme }) => theme.themeBlack}
          radius="10px"
        >kakao로 회원가입</Button>
        <Button
          width="100%"
          margin="15px auto"
          padding="15px 0"
          border={({ theme }) => theme.gray2}
          color={({ theme }) => theme.themeBlack}
          radius="10px"
        >구글로 회원가입</Button>
        <Button
          width="100%"
          margin="15px auto"
          padding="15px 0"
          border={({ theme }) => theme.gray2}
          color={({ theme }) => theme.themeBlack}
          radius="10px"
        >Apple 계정으로 회원가입</Button>
      </SignUpSocial>
      <SignUpMsg>
        에어비앤비 계정이 존재하나요?
        <strong onClick={() => setSignMode('signin')}>로그인</strong>
      </SignUpMsg>
    </>
  )
}

const SignUpForm = styled.form`
  width: 100%;
`;

const ValidMsg = styled.p`
  margin: 10px 0;
  color: ${({ isValid, theme }) => isValid ? theme.gray2 : theme.themeWarning};
  font-size: 12px;
`;


const SignUpInputWrapper = styled.section`
  position: relative;
  margin: 0 0 20px 0;

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

const SignUpLaws = styled.p`
  color: ${({ theme }) => theme.gray2};
  line-height: 1.4;
  font-size: 12px;

  strong {
    font-size: 12px;
  }
  a {
    color: #004CC4;
    text-decoration: underline;
    font-size: 12px;
  }
`;

const SignUpSocial = styled.section`
  button:hover {
    border: 2px solid ${({ theme }) => theme.themeBlack};
  }
`;

const SignUpMsg = styled.p`
  padding: 10px 0 0;
  color: ${({ theme }) => theme.gray2};

  strong {
    margin: 0 0 0 5px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default SignUpModal;
