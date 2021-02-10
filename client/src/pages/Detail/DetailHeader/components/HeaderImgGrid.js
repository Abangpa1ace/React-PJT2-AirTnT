import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../../Context' ;

const HeaderImgGrid = () => {
  const { restDetail } = useGlobalContext();

  return (
    <HeeaderImggrid>
      {restDetail.imageList && restDetail.imageList.slice(0,5).map((img, idx) => 
        <ImgCon><img src={img} alt={`rest-img-${idx}`} /></ImgCon>  
      )}
    </HeeaderImggrid>
  )
}

const HeeaderImggrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 50%);
  grid-gap: 10px;
  width: 100%;
  height: 440px;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
`;

const ImgCon = styled.div`
  overflow: hidden;
  cursor: pointer;

  &:nth-child(1) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }

  &:nth-child(2) {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }

  &:nth-child(3) {
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;
  }

  &:nth-child(4) {
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
  }

  &:nth-child(5) {
    grid-column: 4 / span 1;
    grid-row: 2 / span 1;
  }

  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .3s ease;


  &:hover {
    transform: scale(1.1);
  }
  }
`;



export default HeaderImgGrid;
