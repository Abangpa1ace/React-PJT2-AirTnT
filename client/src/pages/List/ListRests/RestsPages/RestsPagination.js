import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../../../Components/Global/GlobalComponent';
import { flexCenter } from '../../../../Styles/theme';

const Pagination = ({ page, setPage }) => {
  return (
    <PageBtnCon>
      <Button>&lt;</Button>
      {[1,2,3,4,5].map((ele, idx) => {
        return (
          <Link className={idx===(page-1) ? 'focus' : ''}><Button onClick={() => setPage(idx+1)}>{ele}</Button></Link>
        )
      })}
      <Button>&gt;</Button>
    </PageBtnCon>
  )
}

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

export default Pagination
