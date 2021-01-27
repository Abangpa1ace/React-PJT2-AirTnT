import React from 'react';
import styled from 'styled-components';
import ItemSlider from './ItemSlider';
import ItemInfo from './ItemInfo';

const Restsitem = styled.li`
  display: flex;
  width: 100%;
  height: 250px;
  padding: 25px 0;
  border-top: 1px solid ${({ theme }) => theme.gray1};

  img {
    width: 270px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
`;



const RestsItem = ({ idx, imageList, category, title, mainInfo, subInfo, price, like }) => {
  return (
    <Restsitem>
      <ItemSlider 
        idx={idx} 
        imageList={imageList} 
        title={title} 
      />
      <ItemInfo 
        category={category} 
        title={title} 
        mainInfo={mainInfo}
        subInfo={subInfo}
        price={price}
        like={like}
      />
    </Restsitem>
  )
}

export default RestsItem
