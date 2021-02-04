import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RecentAPI } from '../../../../Data/config';
import { flexBetween } from '../../../../Styles/theme';
import RestsItemRecent from './RestsItemRecent';

const Restsrecent = styled.section`
  padding: 50px 24px 60px;
  background: ${({ theme }) => theme.gray0};

  h2 {
    font-size: 24px;
    padding: 0 0 10px 0;
  }

  p {
    font-size: 16px;
  }

  .recent-container {
    padding: 20px 0;
    ${flexBetween};
  }
`;

const RestsRecent = () => {
  const [recentList, setRecentList] = useState([]);
  const [recentId, setRecentId] = useState(-1);

  const fetchRecent = async () => {
    const response = await fetch(RecentAPI);
    const result = await response.json();
    setRecentList(result.data);
  }

  useEffect(() => {
    fetchRecent();
  }, [])

  return (
    <Restsrecent>
      <h2>최근 조회</h2>
      <p>현재 검색 결과와 일치하도록 날짜와 가격이 업데이트 되었습니다.</p>
      <ul className="recent-container">
        {recentList && 
        recentList.map((rest) => {
          const { id, imageList, category, title, price, like } = rest;
          return (
            <RestsItemRecent 
              key={id}
              id={id}
              imageList={imageList}
              category={category}
              title={title}
              price={price}
              like={like}
              recentId={recentId}
              setRecentId={setRecentId}
            />
          )
          })}
      </ul>
    </Restsrecent>
  )
}

export default RestsRecent
