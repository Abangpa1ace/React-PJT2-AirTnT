import React from 'react';
import styled from 'styled-components';
import SearchMap from './SearchMap';
import SearchCalender from './SearchCalender';
import SearchMember from './SearchMember';

const DetailsCon = styled.div`
  position: relative;
  width: 100%;
  /* height: 420px; */
`;

const DetailCloser = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-30%);
  width: 100vw;
  height: 100vh;
  z-index: -5;
`;

const SearchDetails = ({ setActive, focus, setFocus }) => {
  const detailObj = {
    0: <SearchMap />,
    1: <SearchCalender />,
    2: <SearchCalender />,
    3: <SearchMember />,
  }

  const closeDetails = () => {
    setFocus(-1);
    setActive(false);
  }

  return (
    <DetailsCon>
      {detailObj[focus]}
      <DetailCloser onClick={() => closeDetails()} />
    </DetailsCon>
  )
}

export default SearchDetails