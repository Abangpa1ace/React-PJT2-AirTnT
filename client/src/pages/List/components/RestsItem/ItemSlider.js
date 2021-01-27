import React from 'react'
import styled from 'styled-components'

const ImageSlider = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemSlider = ({ idx, imageList, title }) => {
  return (
    <ImageSlider>
      <img src={imageList[idx]} alt={`img-${title}`} />
    </ImageSlider>
  )
}

export default ItemSlider
