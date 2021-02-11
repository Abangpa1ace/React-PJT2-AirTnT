import React from 'react';
import styled from 'styled-components';
import { flexAlign } from '../../../../Styles/theme';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { useGlobalContext } from '../../../../Context';

const SearchNearby = () => {
  const { searchValue, updateSearchValue } = useGlobalContext();
  return (
    <DetailMap isClosed={searchValue.location}>
      <AutoCompleteNear onClick={() => updateSearchValue('location', '가까운 여행지 둘러보기')}>
        <FaMapMarkedAlt />
        <span>가까운 여행지 둘러보기</span>
      </AutoCompleteNear>
    </DetailMap>
  )
};

const DetailMap = styled.div`
  display: ${({ isClosed }) => isClosed ? "none" : "block"};
  position: absolute;
  width: 450px;
  background: #ffffff;
  padding: 15px 0;
  border-radius: ${({ theme }) => theme.radius };
  box-shadow: ${({ theme }) => theme.shadowDiagonal};
  overflow: hidden;
`;

const AutoCompleteNear = styled.div`
  ${flexAlign};
  width: 100%;
  padding: 15px 20px;
  cursor: pointer;
  &:hover { background: ${({ theme }) => theme.gray0 } }

  svg { 
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.themePinkDarker }
  }
  span {
    padding-left: 10px;
    font-size: 16px;
  }
`;

export default SearchNearby;
