import React from 'react';
import styled from 'styled-components';
import ItemSlider from '../../../../Components/Global/ItemSlider';
import { Button, Linker } from '../../../../Components/Global/GlobalComponent';
import { flexAlign } from '../../../../styles/theme';
import { BsHeart, BsStarFill } from 'react-icons/bs';

const RecentItem = styled.article`
  position: relative;
  width: 19%;
  span { color: #959595; }
  & > button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    svg { fill: #ffffff; }
  }

  .like { 
    ${flexAlign};
    padding: 7px 0;

    svg {
      width: 15px;
      fill: ${({ theme }) => theme.themePink };
      transform: translateY(-2px);
    }
    p { padding: 0 3px; }
  }

  .description {
    p {
      width: 100%;    
      line-height: 1.3;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .price {
    p, strong {
      padding: 5px 0;
      font-size: 16px;
    }

    span { 
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: initial;
      }
    }
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const RestsItemRecent = ({ id, imageList, title, category, price, like, recentId, setRecentId }) => {
  const { city, type, validRoom } = category;
  const { likeAvg, likeCount } = like;
  return (
    <RecentItem
      onMouseOver={() => setRecentId(id)}
      onMouseOut={() => setRecentId(-1)}>
      <Button><BsHeart /></Button>
      <ItemSlider 
        id={id} 
        imageList={imageList} 
        width="100%"
        height="120px"
        focusedRest={id === recentId}
      />
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
        <span>총 요금: ₩{(price * 2).toLocaleString()}</span>
      </div>
      <Linker to={`/details/${id}`}></Linker>
    </RecentItem>
  )
}

export default RestsItemRecent
