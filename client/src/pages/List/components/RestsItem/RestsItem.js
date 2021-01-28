import React from 'react';
import styled, { css } from 'styled-components';
import { useGlobalContext } from '../../../../Context';
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



const RestsItem = ({ id, imageList, category, title, mainInfo, subInfo, price, like, focusedRest }) => {
  const { restId, setRestId } = useGlobalContext();
  return (
    <Restsitem 
      as="a" href={`/details/${id}`} 
      focusedRest={id === restId}
      onMouseEnter={() => setRestId(id)}>
      <ItemSlider 
        id={id} 
        imageList={imageList} 
        title={title}
        width="300px"
        height="200px"
        focusedRest={id === restId}
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
