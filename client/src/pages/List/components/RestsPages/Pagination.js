import React from 'react';
import styled from 'styled-components';
import { Linker, Button } from '../../../../components/Global/GlobalComponent';
import { flexCenter } from '../../../../styles/theme';

const PageBtnCon = styled.div`
  ${flexCenter};
  width: 400px;
  margin: 0 auto;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 16px;

    &:hover {
      background: ${({ theme }) => theme.gray0};
    }
  }
`;

const Pagination = () => {
  return (
    <PageBtnCon>
      <Button>&lt;</Button>
      <Linker><Button>1</Button></Linker>
      <Linker><Button>2</Button></Linker>
      <Linker><Button>3</Button></Linker>
      <Linker><Button>4</Button></Linker>
      <Linker><Button>5</Button></Linker>
      <Button>&gt;</Button>
    </PageBtnCon>
  )
}

export default Pagination
