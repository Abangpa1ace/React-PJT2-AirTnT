import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Global/GlobalComponent';
import { BsHeart } from 'react-icons/bs';

const InfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 40px;

  h2 {
    font-size: 18px;
    font-weight: 400;
  }

  svg {
    fill: ${({ isLiked, theme }) => isLiked && theme.themePink }
  }
`;

const ItemInfoHeader = ({ category, title}) => {
  const { city, type, validRoom } = category;

  return (
    <InfoHeader className='item-info-header'>
      <div className="rest-header-left">
        <span>{city}의 {type} {validRoom}</span>
        <h2>{title}</h2>
      </div>
      <Button
        padding="10px"
        backgroundHov={({ theme }) => theme.gray0}
        >
        <BsHeart />
      </Button>
    </InfoHeader>
  )
}

export default ItemInfoHeader;