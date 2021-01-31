import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from './GlobalComponent';
import { flexCenter } from '../../styles/theme';

const ImageSlider = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
    transition: all .3s ease;

    &.active {
      opacity: 1;
      transform: translateX(0);
    }
    &.prev {
      transform: translateX(-100%);
    }
    &.next {
      transform: translateX(100%);
    }
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &:nth-child(1) { left: 10px; }
    &:nth-child(2) { right: 10px; }
    opacity: ${({ focusedRest }) => focusedRest ? 1 : 0};
    transition: all .5s ease;
    z-index: 10;
  }
`;

const DotsCon = styled.ul`
  ${flexCenter};
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  /* width: 120px; */
  height: 7px;
  overflow: hidden;
  transition: all .3s ease;
  opacity: ${({ focusedRest }) => focusedRest ? 1 : 0};

  li {
    width: 5px;
    height: 5px;
    margin: 0 2px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    transition: all .3s ease;

    &.active {
      width: 7px;
      height: 7px;
      background: #ffffff;
    }
  }

`;

const ItemSlider = ({ id, imageList, width, height, focusedRest }) => {
  const [imageIdx, setImageIdx] = useState(0);
  const lastIdx = imageList.length - 1;

  const setSlideImages = (index) => {
    if (index === imageIdx) {
      return 'active';
    }
    else if (index === imageIdx - 1 || (index === 0 && imageIdx === lastIdx)) {
      return 'prev';
    }
    else {
      return 'next';
    }
  }

  const prevImage = () => {
    setImageIdx(imageIdx === 0 ? lastIdx : imageIdx - 1);
  }

  const nextImage = () => {
    setImageIdx((imageIdx + 1)%imageList.length);
  }

  return (
    <ImageSlider width={width} height={height} focusedRest={focusedRest}>
      <Button
        btnType='prev'
        width="30px"
        height="30px"
        background="rgba(255,255,255,0.8)"
        backgroundHov="rgba(255,255,255,1)"
        radius="50%"
        fontSize="16px"
        onClick={prevImage}>
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
        fontSize="16px"
        onClick={nextImage}>
        &gt;
      </Button>
      {imageList.map((image, idx) => 
        <img src={image} alt={`restImg-${id}-${idx}`} className={setSlideImages(idx)}/>
      )}
      <DotsCon focusedRest={focusedRest}>
        {imageList.map((_, idx) => 
          <li className={idx === imageIdx ? 'active' : ''} />
        )}
      </DotsCon>
    </ImageSlider>
  )
}

export default ItemSlider
