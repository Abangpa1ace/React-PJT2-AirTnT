import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../../../Components/Global/GlobalComponent';
import { flexCenter } from '../../../../Styles/theme';

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

const Pagination = ({ pageIdx, setPageIdx }) => {
  return (
    <PageBtnCon>
      <Button>&lt;</Button>
      {[1,2,3,4,5].map((ele, idx) => {
        return (
          <Link to="/" className={idx===pageIdx ? 'focus' : ''}><Button onClick={() => setPageIdx(idx)}>{ele}</Button></Link>
        )
      })}
      <Button>&gt;</Button>
    </PageBtnCon>
  )
}

export default Pagination
