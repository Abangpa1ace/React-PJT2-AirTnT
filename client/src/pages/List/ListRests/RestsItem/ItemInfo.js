import React from 'react';
import styled from 'styled-components';
import ItemInfoHeader from './ItemInfoHeader';
import ItemInfoFooter from './ItemInfoFooter';

const RestInfo = styled.section`
  width: 60%;
  height: 100%;
  margin: 0 0 0 20px;

  span {
    display: inline-block;
    padding: 0 0 7px 0;
    color: #9c9c9c;
  }

  .spliter {
    width: 40px;
    height: 1px;
    margin: 15px 0;
    background: ${({ theme }) => theme.gray1}
  }
`;

const ItemInfo = ({ id, category, title, mainInfo, subInfo, price, like }) => {
  const { isLiked } = like;
  return (
    <RestInfo>
      <ItemInfoHeader category={category} title={title} isLiked={isLiked} />
      <div className="spliter" />
      <ItemInfoFooter mainInfo={mainInfo} subInfo={subInfo} price={price} like={like} />
    </RestInfo>
  )
}

export default ItemInfo
