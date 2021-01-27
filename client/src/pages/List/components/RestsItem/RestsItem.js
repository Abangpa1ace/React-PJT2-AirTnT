import React from 'react';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';


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

const RestInfo = styled.div`
  width: 100%;
  margin: 0 0 0 20px;

  p, span {
    padding: 0 0 10px 0;
    color: #9c9c9c;
  }

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 18px;
      font-weight: 400;
    }
  }

  .spliter {
    width: 40px;
    height: 1px;
    margin: 15px 0;
    background: ${({ theme }) => theme.gray1}
  }
`;

const RestsItem = ({ idx, imageList, category, title, mainInfo, subInfo, price, like }) => {
  const { city, type, validRoom } = category;
  const { maxGuest, bedroom, bed, bathroom } = mainInfo;
  return (
    <Restsitem>
      <img src={imageList[idx]} alt={`img-${title}`} />
      <RestInfo>
        <header>
          <div className="rest-header-left">
            <p>{city}의 {type} {validRoom}</p>
            <h2>{title}</h2>
          </div>
          <BsHeart />
        </header>
        <div className="spliter" />
        <footer>
          <p>
            <span>최대 인원 {maxGuest}명</span>
            <span>∙</span>
            <span>{bedroom === 0 ? '원룸' : `침실 ${bedroom}개`}</span>
            <span>∙</span>
            <span>침대 {bed === 0 ? '없음' : `${bed}개`}</span>
            <span>∙</span>
            <span>{bathroom === 0 ? '간이 욕실' : `욕실 ${bathroom}개`}</span>
          </p>
          <p>
            {subInfo && subInfo.map((info, idx) => {
              return (
                <span>
                  {info}
                  {idx !== subInfo.length - 1 && <span>∙</span>}
                </span>
              )
            })}
          </p>
        </footer>
      </RestInfo>
    </Restsitem>
  )
}

export default RestsItem
