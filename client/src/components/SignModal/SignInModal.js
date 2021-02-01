import React from 'react'

const SignInModal = () => {
  return (
    <div>
      
    </div>
  )
}

export default SignInModal


// import React, { useState } from 'react'
// import styled from 'styled-components';
// import { withRouter } from 'react-router-dom';

// const ModalRegister = ({ setSignMode }) => {
//   const [signIn, setSignIn] = useState({
//     email: '',
//     password: '',
//   })

//   const updateInput = (e) => {
//     const { name, value } = e.target;
//     setSignIn({
//       ...signIn,
//       [name]: value,
//     })
//   }
  
//   const submitSignIn = (e) => {
//     const { email, password } = signIn;
//     const isValidEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email);
//     const isValidPassword = password.length >= 8; 

//     if (!isValidEmail) {
//       alert('유효하지 않은 이메일입니다.')
//     }
//     if (!isValidPassword) {
//       alert('비밀번호는 8자 이상입니다.')
//     }
//     if (isValidPassword && isValidPassword) {
//       fetch('api', {
//         method: "POST",
//         body: JSON.stringify({
//           email: email,
//           password: password,
//         }),
//       })
//         .then((response) => response.json())
//         .then((result) => {
//           const { Message, Token } = result;
//           if (Message && Token) {
//             localStorage.setItem("token", Token);
//             this.props.history.push("/");
//           }
//         })
//     }
//   }

//   return (
//     <SignInForm onSubmit={(e) => submitSignIn(e)}>
//       <InputContainer>
//         <input 
//           type="text"
//           name="email"
//           value={signIn.email}
//           onChange={(e) => updateInput(e)}
//           placeholder="이메일" />
//         <input 
//           type="password"
//           name="password"
//           value={signIn.password}
//           onChange={(e) => updateInput(e)}
//           placeholder="비밀번호" />
//       </InputContainer>
//       <button type="submit">로그인</button>
//       <Divider><span>또는</span></Divider>
//       <SignInMsg>
//         <strong>비밀번호를 잊으셨나요?</strong>
//         <span>에어비앤비 계정이 없으세요? 
//           <strong onClick={() => setSignMode('signup')}>회원가입</strong>
//         </span>
//       </SignInMsg>
//     </SignInForm>
//   )
// }

// const SignInForm = styled.form`
  
//   button {
//     width: 100%;
//     margin: 15px auto;
//     padding: 15px 0;
//     color: #ffffff;
//     background: ${({ theme }) => theme.themePink};
//     border-radius: 10px;
//     font-size: 16px;
//   }
// `;

// const InputContainer = styled.div`
//   input {
//     width: 100%;
//     padding: 20px 10px;
//     border: 1px solid ${({ theme }) => theme.gray1};
//     font-size: 16px;

//     &:first-child {
//       border-radius: 10px 10px 0 0;
//     }
//     &:nth-child(2) {
//       border-top: none;
//       border-radius: 0 0 10px 10px;
//     }
//     &:focus, &:active {
//       border: 2px solid ${({ theme }) => theme.themeBlack};
//     } 
//   }
// `;

// const Divider = styled.div`
//   position: relative;
//   width: 100%;
//   height: 1px;
//   margin: 30px 0;
//   background: ${({ theme }) => theme.gray1};

//   span {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -40%);
//     padding: 5px 10px;
//     background: #ffffff;
//     color: ${({ theme }) => theme.gray2};
//   }
// `;

// const SignInMsg = styled.footer`
//   span {
//     display: block;
//     margin: 15px 0 0;
//     color: ${({ theme }) => theme.gray2};
//   }

//   strong {
//     text-decoration: underline;
//     cursor: pointer;
//   }
// `;

// export default withRouter(ModalRegister);
