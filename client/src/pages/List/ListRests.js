import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RestsHeader from './components/RestsHeader/RestsHeader';
import RestsItem from './components/RestsItem';
import { RestsMockData } from './ListData';

const RestContainer = styled.div`
  width: 47%;
  padding: 110px 24px 24px;
`;

const RestsItemCon = styled.ul`
  width: 100%;
  margin: 20px 0;
`;

const ListRests = () => {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    setList(RestsMockData);
  }, []);

  return (
    <RestContainer>
      <RestsHeader />
      <RestsItemCon>
        {list.map((rest) => {
          const { id, imageList, category, title, mainInfo, subInfo, price, like } = rest;
          return (
            <RestsItem 
              key={id}
              idx={id}
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
    </RestContainer>
  )
}

export default ListRests;
