import React from 'react';
import styled from 'styled-components';
import { Linker, Image } from '../../../Components/Global/GlobalComponent';
import { CITIESDATA } from '../HomeData';
import { flexAlign } from '../../../Styles/theme';

const CitiesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  width: ${(props) => props.theme.webWidth};
  margin: 0 auto;
  padding: 64px 0;

  a {
    ${flexAlign}

    div {
      margin: 0 0 0 15px;

      strong, p { 
        margin: 5px 0 0 0;
        font-size: 16px;
      }
    }
  }
`;

const HomeCities = () => {
  return (
    <CitiesList>
      {CITIESDATA.map((city) => {
        const { id, img, title, time, link } = city;
        return (
          <li key={id}>
            <Linker to={link}>
              <Image src={img} alt={`city-img-${title}`}
                width="64px" height="64px" />
              <div>
                <strong>{title}</strong>
                <p>차로 {time} 거리</p>
              </div>
            </Linker>
          </li> 
        )
      })} 
    </CitiesList>
  )
}

export default HomeCities;