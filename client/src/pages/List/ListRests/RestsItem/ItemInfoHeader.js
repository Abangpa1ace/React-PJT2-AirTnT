import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../GlobalComponents/Common/StyledCommon';
import { BsHeart } from 'react-icons/bs';

const ItemInfoHeader = ({ category, title}) => {
  const { city, type, building } = category;

  return (
    <InfoHeader className='item-info-header'>
      <InfoHeaderTitle>
        <span>{city}의 {building} {type}</span>
        <h2>{title}</h2>
      </InfoHeaderTitle>
      <Button
        padding="10px"
        backgroundHov={({ theme }) => theme.gray0}
        >
        <BsHeart />
      </Button>
    </InfoHeader>
  )
}

const InfoHeader = styled.header`
  height: 40px;

  button {
    position: absolute;
    top: 15px;
    right: 0;
    z-index: 5;
    svg {
      fill: ${({ isLiked, theme }) => isLiked && theme.themePink }
    }
  }
`;

const InfoHeaderTitle = styled.div`
  width: 100%;

  h2 {
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export default ItemInfoHeader;