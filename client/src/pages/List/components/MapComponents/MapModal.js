import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../../Context';
import ItemSlider from '../../../../Components/Global/ItemSlider';
import { Linker } from '../../../../Components/Global/GlobalComponent';
import { BsStarFill } from 'react-icons/bs';
import { flexAlign } from '../../../../Styles/theme';

const MapModal = ({ isModalOn, modalX, modalY, modalIdx }) => {
  const { restList } = useGlobalContext();
  const [pinRest, setPinRest] = useState(restList[modalIdx]);
  const { id, imageList, title, category, like, price } = pinRest;
  const { likeAvg, likeCount } = like;
  const { city, type, validRoom } = category;

  useEffect(() => {
    setPinRest(restList[modalIdx])
  }, [restList, modalIdx])
  console.log(modalX, modalY)
  return (
    <RestModal 
      isModalOn={isModalOn} 
      modalX={modalX}
      modalY={modalY}>
      <ItemSlider 
        id={id}
        imageList={imageList}
        width="100%"
        height="200px"
        focusedRest={true}
      />
      <RestModalFooter>
        <div className="like">
          <BsStarFill />
          <p>{likeAvg}</p>
          <span>({likeCount})</span>
        </div>
        <div className="description">
          <p>{city}의 {type} {validRoom}</p>
          <p>{title}</p>
        </div>
        <div className="price">
          <p><strong>₩{price.toLocaleString()}</strong>/1박</p>
        </div>
      </RestModalFooter>
      <Linker to={`/details/${id}`}></Linker>
    </RestModal>
  )
}

const RestModal = styled.article`
  display: ${({ isModalOn }) => isModalOn ? 'block' : 'none'};
  position: absolute;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 350px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 1px #9c9c9c;
  overflow: hidden;
  z-index: 10;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  top: ${({ modalX, modalY }) => {
    if (modalY < 300 || (modalX >= 200 && modalX <= 650 && modalY < 550)) {
      return `${modalY+210}px`
    }
    else if (modalY > 750 || (modalX >= 200 && modalX <= 650 && modalY >= 550)) {
      return `${modalY-210}px`
    }
    else {
      return `${modalY}px`
    }
  }};
  left: ${({ modalX }) => {
    if (modalX < 200) {
      return `${modalX+200}px`
    }
    else if (modalX > 650) {
      return `${modalX-200}px`
    }
    else {
      return `${modalX}px`
    }
  }};
`;

const RestModalFooter = styled.footer`
  padding: 25px 20px;

  .like { 
    ${flexAlign};
    
    svg {
      width: 15px;
      fill: ${({ theme }) => theme.themePink };
      transform: translateY(-3px);
    }
    p { 
      padding: 0 3px; 
      font-size: 16px;  
    }
    span {
      color: #959595;
      font-size: 16px;
    }
  }

  .description {
    padding: 7px 0 10px;
    p {
      width: 100%;
      font-size: 18px;
      line-height: 1.4;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .price {
    p, strong {
      font-size: 18px;
    }
  }
`;

export default MapModal;
