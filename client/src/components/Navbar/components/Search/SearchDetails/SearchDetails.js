import React from 'react';
import styled from 'styled-components';
import SearchNearby from './SearchNearby';
import SearchCalender from './SearchCalender';
import SearchMember from './SearchMember';

const SearchDetails = ({ setSearchActive, searchFocus, setSearchFocus }) => {
  const detailObj = {
    0: <SearchNearby />,
    1: <SearchCalender />,
    2: <SearchCalender />,
    3: <SearchMember />,
  }

  const closeDetails = () => {
    setSearchFocus(-1);
    setSearchActive(false);
  }

  return (
    <DetailsCon>
      {detailObj[searchFocus]}
      <DetailCloser onClick={() => closeDetails()} />
    </DetailsCon>
  )
};

export default SearchDetails;

const DetailsCon = styled.div`
  position: relative;
  width: 100%;
  margin: 10px 0 0;
`;

const DetailCloser = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translate(-30%);
  z-index: -5;
`;