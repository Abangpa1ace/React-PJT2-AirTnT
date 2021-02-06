import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../../Context';
import { Button } from '../../../../Components/Global/GlobalComponent';
import { flexCenter } from '../../../../Styles/theme';

const RestsPageBtn = () => {
  const { restsTotal, page, setPage, LIMIT } = useGlobalContext();
  const pageArrLength = Math.ceil(restsTotal/LIMIT)
  const pageArr = Array.from({ length: pageArrLength }, (_, i) => i+1)
  
  const prevPage = () => {
    const prev = (page === 1 ? 1 : page-1);
    setPage(prev);
  }

  const nextPage = () => {
    const next = (page === pageArrLength ? pageArrLength : page+1);
    setPage(next)
  }

  return (
    <PageBtnCon>
      <Button 
        margin="0 10px"
        onClick={() => prevPage()}
      >&lt;</Button>
      {pageArr.map((pageNum) => {
        return (
          <Button 
            width="30px"
            height="30px"
            margin="0 10px"
            background={({ theme }) => page === pageNum ? theme.themeBlack : 'transparent'}
            backgroundHov={({ theme }) => theme.gray0}
            color={page === pageNum ? "#ffffff" : 'initial'}
            onClick={() => setPage(pageNum)}>
            {pageNum}
          </Button>
        )
      })}
      <Button 
        margin="0 10px"
        onClick={() => nextPage()}
      >&gt;</Button>
    </PageBtnCon>
  )
}

const PageBtnCon = styled.div`
  ${flexCenter};
  width: 400px;
  margin: 0 auto;
`;

export default RestsPageBtn
