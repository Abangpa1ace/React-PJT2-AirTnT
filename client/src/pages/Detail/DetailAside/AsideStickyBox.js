import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../Components/Global/GlobalComponent';
import { BsStarFill } from 'react-icons/bs';
import { flexBetween, flexAlign } from '../../../Styles/theme';
import { useGlobalContext } from '../../../Context';

const AsideStickyBox = () => {
  const { searchValue } = useGlobalContext();
  return (
    <StickyBox>
      <StickyHeader>
        <p><strong>₩76,210</strong>/박</p>
        <div>
          <BsStarFill /><strong>&nbsp;4.83</strong><span>&nbsp;(60)</span>
        </div>
      </StickyHeader>
      <StickyValue>
        <ValueBox>
          <span>체크인</span>
          <input type="text" placeholder="2021. 3. 2." />
        </ValueBox>
        <ValueBox>
          <span>체크아웃</span>
          <input type="text" placeholder="2021. 3. 4." />
        </ValueBox>
        <ValueBox>
          <div>
            <span>인원</span>
            <p>게스트 2명</p>
          </div>
          <strong>
            ⇧
          </strong>
        </ValueBox>
      </StickyValue>
      <Button
        width="100%"
        padding="15px 0"
        color="#ffffff"
        background={({ theme }) => theme.themePinkDarker}
        radius="10px"
        fontSize="16px"
      >예약하기</Button>
      <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
      <StickyPrice>
        <span>₩76,210 x 2박</span>
        <span>₩152,420</span>
      </StickyPrice>
      <StickyPrice>
        <span>서비스 수수료</span>
        <span>₩21,158</span>
      </StickyPrice>
      <StickyPrice>
        <span>숙박세와 수수료</span>
        <span>₩2,152</span>
      </StickyPrice>
      <StickyTotal>
        <span>총 합계</span>
        <span>₩176,090</span>
      </StickyTotal>
    </StickyBox>
  )
}

const StickyBox = styled.div`
  position: sticky;
  top: 140px;
  width: 100%;
  margin: 0 0 36px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadowDiagonal};

  & > p {
    width: 100%;
    text-align: center;
    margin: 20px 0;
  }
`;

const StickyHeader = styled.header`
  ${flexBetween}

  p {
    font-size: 16px;
    strong { 
      padding: 0 5px 0 0;
      font-size: 20px;
    }
  }

  div {
  ${flexAlign};
    svg {
      width: 15px;
      fill: ${({ theme }) => theme.themePink };
      transform: translateY(-1px);
    }
    span {
      color: ${({ theme }) => theme.gray2};
    }
  }
`;

const StickyValue = styled.section`
  display: grid;
  margin: 20px 0;
  border: 1px solid ${({ theme }) => theme.gray1};
  border-radius: 10px;
`;

const ValueBox = styled.div`
  padding: 15px 10px;

  span {
    display: block;
    font-size: 10px;
    font-weight: bold;
    padding: 0 0 5px;
  }

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 2;
    border-right: 1px solid ${({ theme }) => theme.gray1};
  }

  &:nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
  &:nth-child(3) {
    ${flexBetween};
    grid-column-start: 1;
    grid-column-end: 3;
    border-top: 1px solid ${({ theme }) => theme.gray1}; 

    strong {
      font-size: 20px;
      margin: 0 5px 0 0;
      transform: rotate(180deg);
    }
  }
`;

const StickyPrice = styled.div`
  ${flexBetween};
  padding: 7px 0;

  span {
    font-size: 16px;

    &:first-child {
      text-decoration: underline;
    }
  }
`;

const StickyTotal = styled.div`
  ${flexBetween};
  padding: 25px 0 5px;
  margin: 10px 0 0;
  border-top: 1px solid ${({ theme }) => theme.gray1};

  span {
    font-size: 16px;
    font-weight: 600;
  }
`;


export default AsideStickyBox
