import React from 'react';
import styled from 'styled-components';
import { Linker, GridBox, Image } from '../../../GlobalComponents/Common/StyledCommon';
import { EXPERIENCEDATA } from '../HomeData';

const Experience = styled.section`
  width: 100%;
  padding: 60px;
  background: #000000;
`;

const ExperienceCon = styled.div`
  width: ${(props) => props.theme.webWidth};
  margin: 0 auto;
  
  * {
    color: #ffffff;
  }

  h2 {
    font-size: 32px;
  }

  p {
    padding: 15px 0 30px;
  }

  h4 {
    padding: 8px 0;
    font-size: 18px;
    font-weight: 500;
  }
`;

const HomeExperience = () => {
  return (
    <Experience>
      <ExperienceCon>
        <h2>세상을 만나는 특별한 방법</h2>
        <p>현지 전문가와 함께하는 독특한 액티비티를 직접 체험하거나 온라인으로 만나보세요.</p>
        <GridBox repeat="3">
          {EXPERIENCEDATA.map((recommend) => {
            const { id, img, title, content, link } = recommend;
            return (
              <article key={id}>
                <Linker to={link}>
                  <Image src={img} alt={`home-recommend-${id}`} width="100%" height="520px" />
                  <h4>{title}</h4>
                  <span>{content}</span>
                </Linker>
              </article>
            )
          })}
        </GridBox>
      </ExperienceCon>
    </Experience>
  )
}

export default HomeExperience;