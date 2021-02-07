import React from 'react';
import styled from 'styled-components';

const HeaderImgGrid = () => {
  return (
    <HeeaderImggrid>
      <img src="/images/default3.jpg" alt="default" />
      <img src="/images/default3.jpg" alt="default" />
      <img src="/images/default3.jpg" alt="default" />
      <img src="/images/default3.jpg" alt="default" />
      <img src="/images/default3.jpg" alt="default" />
    </HeeaderImggrid>
  )
}

const HeeaderImggrid = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 100%;
  height: 440px;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .3s ease;
    filter: grayscale(0%);
    cursor: pointer;

    &:hover {
      filter: grayscale(50%);
    }

    &:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    &:nth-child(2) {
      grid-column-start: 3;
      grid-column-end: 4;
    }

    &:nth-child(3) {
      grid-column-start: 4;
      grid-column-end: 5;
    }
  }
`;



export default HeaderImgGrid;
