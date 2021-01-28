import React from 'react';
import styled from 'styled-components';
import { Linker, GridBox, Image } from '../../../components/Global/GlobalComponent';
import { HOSTINGDATA } from '../HomeData';

const HostingCon = styled.div`
  width: ${(props) => props.theme.webWidth};
  padding: 60px 0;
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

const HomeHosting = () => {
  return (
    <HostingCon>
      <h2>수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.</h2>
      <GridBox repeat="3">
        {HOSTINGDATA.map((recommend) => {
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
    </HostingCon>
  )
}

export default HomeHosting;