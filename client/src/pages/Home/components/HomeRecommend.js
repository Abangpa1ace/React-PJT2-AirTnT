import React from 'react';
import styled from 'styled-components';
import { Linker, GridBox, Image } from '../../../components/Global/GlobalComponent';
import { RECOMMENDDATA } from '../HomeData';

const RecommendCon = styled.div`
  width: ${(props) => props.theme.webWidth};
  padding: 30px 0 60px;
  margin: 0 auto;

  h2 {
    font-size: 32px;
    padding-bottom: 20px;
  }

  h4 {
    padding-top: 8px;
    font-size: 18px;
    font-weight: 500;
  }
`;

const HomeRecommend = () => {
  return (
    <RecommendCon>
      <h2>어디에서나, 여행은 살아보는 거야!</h2>
      <GridBox repeat="4">
        {RECOMMENDDATA.map((recommend) => {
          const { id, img, title, link } = recommend;
          return (
            <article key={id}>
              <Linker to={link}>
                <Image src={img} alt={`home-recommend-${id}`} width="100%" height="385px" />
                <h4>{title}</h4>
              </Linker>
            </article>
          )
        })}
      </GridBox>
    </RecommendCon>
  )
}

export default HomeRecommend;
