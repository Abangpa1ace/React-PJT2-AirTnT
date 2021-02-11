import React from 'react';
import styled from 'styled-components';
import { Linker, Button } from '../../../GlobalComponents/Common/StyledCommon';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 850px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 850px;
    object-fit: cover;
    z-index: -1;
  }
  
  .nearby-search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 80px;
    
    p {
      color: #ffffff;
      line-height: 1.2;
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
`;

const HomeImage = () => {
  return (
    <ImageContainer>
      <div className="nearby-search">
        <p>이제, 여행은<br />가까운 곳에서</p>
        <Linker to="/nearby">
          <Button
            padding="10px 15px"
            background="#ffffff"
            background2={(props) => props.theme.gray0}
            radius="10px"
            >근처의 숙소 둘러보기
          </Button>    
        </Linker>
      </div>
      <img src="https://a0.muscache.com/im/pictures/cf39f4c4-e860-43d4-85be-deddd7b2da90.jpg?im_w=1920" alt="instagram-main-img" />
    </ImageContainer>
  )
}

export default HomeImage;
