import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../Context';
import RestsHeader from './RestsHeader/RestsHeader';
import RestsItem from './RestsItem/RestsItem';
import RestsPages from './RestsPages/RestsPages';
import RestsRecent from './RestsRecent/RestsRecent';
s
const RestContainer = styled.div`
  width: 47%;
  padding: 60px 0 0;
  main {
    padding: 0 24px 30px;
  }
`;

const RestsItemCon = styled.ul`
  width: 100%;
  margin: 20px 0;
`;

const ListRests = ({ restId, setRestId }) => {
  const { restList } = useGlobalContext();

  return (
    <RestContainer>
      <main className="rests-list">
        <RestsHeader />
        <RestsItemCon>
          {restList.map((rest) => {
            return (
              <RestsItem 
                key={rest.id}
                {...rest}
                restId={restId}
                setRestId={setRestId}
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
