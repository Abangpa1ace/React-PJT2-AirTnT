import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1;
    list-style: none;
  }

  input {
    background: transparent;
    border: 0;
    outline: 0;
  }

  button {
    background: 0;
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  a {
    color: #000000;
    text-decoration: none;
  }
`;