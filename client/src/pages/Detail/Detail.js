import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context';
import DetailHeader from './DetailHeader/DetailHeader';
import DetailInfo from './DetailInfo/DetailInfo';
import DetailAside from './DetailAside/DetailAside';
import DetailAdditional from './DetailAdditional/DetailAdditional';

const Detail = () => {
  const { setNavFixed, setSearchOn } = useGlobalContext();

  useEffect(() => {
    setNavFixed(true);
    setSearchOn(false);
  }, [])

  return (
    <>
      <DetailContainer>
        <DetailHeader />
        <DetailMain>
          <DetailInfo />
          <DetailAside />
        </DetailMain>
        <DetailAdditional />
      </DetailContainer>
    </>
  )
}

const DetailContainer = styled.div`
  width: ${({ theme }) => theme.detailWidth};
  margin: 50px auto;
  padding: 0 80px;
`;

const DetailMain = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 80px;
  width: 100%;
  margin: 20px 0 0;
  padding: 30px 0;
`;

export default Detail

