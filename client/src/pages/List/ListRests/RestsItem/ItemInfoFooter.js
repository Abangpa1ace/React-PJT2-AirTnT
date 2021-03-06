import React from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { flexAlign } from '../../../../Styles/theme';
import { useGlobalContext } from '../../../../Context';

const ItemInfoFooter = ({ mainInfo, subInfo, price, like }) => {
  const { searchValue } = useGlobalContext();
  const { maxGuest, bedroom, bed, bathroom } = mainInfo;
  const { likeAvg, likeCount } = like;

  return (
    <InfoFooter>
      <section className="info-wrapper">
        <div>
          <span>최대 인원 {maxGuest}명</span>
          <span>&nbsp;∙&nbsp;</span>
          <span>{bedroom === 0 ? '원룸' : `침실 ${bedroom}개`}</span>
          <span>&nbsp;∙&nbsp;</span>
          <span>침대 {bed === 0 ? '없음' : `${bed}개`}</span>
          <span>&nbsp;∙&nbsp;</span>
          <span>{bathroom === 0 ? '간이 욕실' : `욕실 ${bathroom}개`}</span>
        </div>
        <div>
          {subInfo && subInfo.slice(0,7).map((info, idx) => {
            return (
              <span>
                {info}
                {idx !== 6 ? <span>&nbsp;∙&nbsp;</span> : <span>&nbsp;등</span>}
              </span>
            )
          })}
        </div>
      </section>
      <section className="like-price-wrapper">
        <div className="like">
          <BsStarFill />
          <strong>{likeAvg}</strong>
          <span>({likeCount})</span>
        </div>
        <div className="price">
          <p><strong>₩{price.toLocaleString()}</strong>/1박</p>
          <span>총 요금: ₩{(price * searchValue.dateDiff).toLocaleString()}</span>
        </div>
      </section>
    </InfoFooter>
  )
}

const InfoFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;

  .like-price-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    span { padding: 0; }

    .like { 
      ${flexAlign};
      height: 15px;
      
      svg {
        width: 15px;
        fill: ${({ theme }) => theme.themePink };
        transform: translateY(-2px);
      }

      strong { padding: 0 3px; } 
    }

    .price {
      text-align: right;

      p, strong {
        padding: 0 0 5px 0;
        font-size: 18px;
      }

      span {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export default ItemInfoFooter;