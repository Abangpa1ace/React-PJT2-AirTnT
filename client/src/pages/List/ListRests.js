import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context';
import RestsHeader from './components/RestsHeader/RestsHeader';
import RestsItem from './components/RestsItem/RestsItem';
import RestsPages from './components/RestsPages/RestsPages';
import RestsRecent from './components/RestsRecent/RestsRecent';

const RestContainer = styled.div`
  width: 47%;
  padding: 110px 0 0;
  main {
    padding: 0 24px 30px;
  }
`;

const RestsItemCon = styled.ul`
  width: 100%;
  margin: 20px 0;
`;

const ListRests = () => {
  const { restList } = useGlobalContext();

  return (
    <RestContainer>
      <main className="rests-list">
        <RestsHeader />
        <RestsItemCon>
          {restList.map((rest) => {
            const { id, imageList, category, title, mainInfo, subInfo, price, like } = rest;
            return (
              <RestsItem 
                key={id}
                id={id}
                imageList={imageList}
                category={category}
                title={title}
                mainInfo={mainInfo}
                subInfo={subInfo}
                price={price}
                like={like}
              />
            )
          })}
        </RestsItemCon>
        <RestsPages />
      </main>
      <RestsRecent />
    </RestContainer>
  )
}

export default ListRests;
