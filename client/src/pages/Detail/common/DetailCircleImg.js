import React from 'react';
import styled from 'styled-components';

const DetailCircleImg = ({ src, alt, length, marginRight }) => {
  return (
    <CircleWrap length={length} marginRight={marginRight}>
      <img src={src} alt={alt} />
    </CircleWrap>
  )
}

const CircleWrap = styled.div`
  width: ${({ length }) => length};
  height: ${({ length }) => length};
  margin-right: ${({ marginRight }) => marginRight || '10px'};
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default DetailCircleImg
