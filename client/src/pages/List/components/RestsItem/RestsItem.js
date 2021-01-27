import React from 'react';
import styled from 'styled-components';
import ItemSlider from './ItemSlider';
import ItemInfo from './ItemInfo';
import { flexBetween } from '../../../../styles/theme';

const Restsitem = styled.li`
  ${flexBetween};
  width: 100%;
  height: 250px;
  padding: 25px 0;
  border-top: 1px solid ${({ theme }) => theme.gray1};
`;



const RestsItem = ({ idx, imageList, category, title, mainInfo, subInfo, price, like }) => {
  return (
    <Restsitem as="a" href="/details">
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
