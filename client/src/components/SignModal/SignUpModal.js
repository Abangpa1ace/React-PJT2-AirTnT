import React, { useState } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../Context';
import { Button } from '../Global/GlobalComponent';
import SignModalInput from './components/SignModalInput';
import SignDivider from './components/SignDivider';

const SignUpModal = ({ setSignMode }) => {
  const { setSignModalOn } = useGlobalContext();
  const [signUpValue, setSignUpValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isValid, setIsValid] = useState({
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

  const submitSignIn = (e) => {
    e.preventDefault();
    setIsValid({
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,
      passwordValid: false,
    })
  }

  const { firstName, lastName, email, password } = signUpValue;
  const { firstNameValid, lastNameValid, emailValid, passwordValid } = isValid;

  return (
    <>
      <SignUpForm onSubmit={(e) => submitSignIn(e)}>
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
              : '⚠︎ 이름을 입력하세요'
            }
          </ValidMsg>
        </SignUpInputWrapper>
        <SignUpInputWrapper>
          <SignModalInput
            type="text"
            name="emailValid"
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
            type={isPwdShown ? 'text' : 'passwordValid'}
            name="passwordValid"
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