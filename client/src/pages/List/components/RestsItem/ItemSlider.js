import React from 'react'
import styled from 'styled-components';
import { Button } from '../../../../components/Global/GlobalComponent';

const ImageSlider = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &:nth-child(2) { left: 10px; }
    &:nth-child(3) { right: 10px; }
    opacity: ${({ focusedRest }) => focusedRest ? 1 : 0};
    transition: all .5s ease;
  }
`;

const ItemSlider = ({ id, imageList, title, width, height, focusedRest }) => {
  return (
    <ImageSlider width={width} height={height} focusedRest={focusedRest}>
      <img src={imageList[id]} alt={`img-${title}`} />
      <Button
        btnType='prev'
        width="30px"
        height="30px"
        background="rgba(255,255,255,0.8)"
        backgroundHov="rgba(255,255,255,1)"
        radius="50%"
        fontSize="16px">
        &lt;
      </Button>
      <Button
        next
        className="slider-next-btn"
        width="30px"
        height="30px"
        background="rgba(255,255,255,0.6)"
        backgroundHov="rgba(255,255,255,0.9)"
        radius="50%"
        fontSize="16px">
        &gt;
      </Button>
    </ImageSlider>
  )
}

export default ItemSlider
