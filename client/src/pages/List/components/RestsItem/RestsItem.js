import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../../Context';
import { Linker } from '../../../../Components/Global/GlobalComponent';
import ItemSlider from '../../../../Components/Global/ItemSlider';
import ItemInfo from './ItemInfo';
import { flexBetween } from '../../../../Styles/theme';


const Restsitem = styled.li`
  ${flexBetween};
  position: relative;
  width: 100%;
  height: 250px;
  padding: 25px 0;
  border-top: 1px solid ${({ theme }) => theme.gray1};

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;



const RestsItem = ({ id, imageList, category, title, mainInfo, subInfo, price, like }) => {
  const { restId, setRestId } = useGlobalContext();
  return (
    <Restsitem 
      focusedRest={id === restId}
      // onMouseOver={() => setRestId(id)}
      // onMouseOut={() => setRestId(-1)}
      >
      <ItemSlider 
        id={id} 
        imageList={imageList} 
        width="300px"
        height="200px"
        focusedRest={id === restId}
      />
      <ItemInfo
        id={id} 
        category={category} 
        title={title} 
        mainInfo={mainInfo}
        subInfo={subInfo}
        price={price}
        like={like}
      />
      <Linker to={`/details/${id}`}></Linker>
    </Restsitem>
  )
}

export default RestsItem
