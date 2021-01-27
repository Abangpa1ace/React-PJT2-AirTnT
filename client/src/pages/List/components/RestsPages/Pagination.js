import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Global/GlobalComponent';
import { flexCenter } from '../../../../styles/theme';

const PageBtnCon = styled.div`
  ${flexCenter};
  width: 400px;
  margin: 0 auto;

  a {
    border-radius: 50%;
    margin: 0 10px;

    button {
      width: 30px;
      height: 30px;
      border-radius: 50%;

      &:hover {
        background: ${({ theme }) => theme.gray0};
      }
    }

    &.focus {
      background: ${({ theme }) => theme.themeBlack};
      button { color: #ffffff; }
    }
  }
`;

const Pagination = () => {
  return (
    <PageBtnCon>
      <Button>&lt;</Button>
      <Link to="/" className="focus"><Button>1</Button></Link>
      <Link to="/"><Button>2</Button></Link>
      <Link to="/"><Button>3</Button></Link>
      <Link to="/"><Button>4</Button></Link>
      <Link to="/"><Button>5</Button></Link>
      <Button>&gt;</Button>
    </PageBtnCon>
  )
}

export default Pagination
