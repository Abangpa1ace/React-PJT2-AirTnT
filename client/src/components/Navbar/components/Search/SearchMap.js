import React from 'react';
import styled from 'styled-components';
import { flexAlign } from '../../../../styles/theme';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { useGlobalContext } from '../../../../Context';

const DetailMap = styled.div`
  width: 450px;
  background: #ffffff;
  padding: 15px 0;
  border-radius: ${({ theme }) => theme.radius };
  overflow: hidden;

  div {
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
  }
`;

const SearchMap = () => {
  const { setLocation } = useGlobalContext();
  return (
    <DetailMap>
      <div onClick={() => setLocation('가까운 여행지 둘러보기')}>
        <FaMapMarkedAlt />
        <span>가까운 여행지 둘러보기</span>
      </div>
    </DetailMap>
  )
}

export default SearchMap;
