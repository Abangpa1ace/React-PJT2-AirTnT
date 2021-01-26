import React, { useState } from 'react';
import styled from 'styled-components';
import { flexCenter, flexBetween } from '../../../../styles/theme';
import MemberBtn from './MemberBtn';
import { MEMBERCONTROLLER } from '../../NavbarData'; 

const DetailMember = styled.ul`
  position: absolute;
  right: 0;
  width: 400px;
  background: #ffffff;
  padding: 30px;
  border-radius: ${({ theme }) => theme.radius };
  overflow: hidden;

  li {
    ${flexBetween};
    padding: 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.gray1};
    &:last-child { border-bottom: none; }
  }
`;

const MemberLeft = styled.div`
  h6 {
    font-size: 16px; 
    font-weight: normal; 
  }
  p {
    color: ${({ theme }) => theme.gray2};
    margin-top: 5px;
  }
`;

const MemberRight = styled.div`
  ${flexCenter};
  span {
    width: 20px;
    text-align: center;
    margin: 0 15px;
    font-size: 16px;
  }
`;

const SearchMember = () => {
  const [adult, setAdult] = useState(0);
  const [kid, setKid] = useState(0);
  const [baby, setBaby] = useState(0);

  return (
    <DetailMember>
      <li key="adult">
        <MemberLeft>
          <h6>성인</h6>
          <p>만 13세 이상</p>
        </MemberLeft>
        <MemberRight>
          <MemberBtn
            condition={adult === 0}
            clickEvent={() => setAdult(adult-1)}>-</MemberBtn>
          <span>{adult}</span>
          <MemberBtn
            condition={adult === 16}
            clickEvent={() => setAdult(adult+1)}>+</MemberBtn>
        </MemberRight>
      </li>
      <li key="kid">
        <MemberLeft>
          <h6>어린이</h6>
          <p>2~12세</p>
        </MemberLeft>
        <MemberRight>
          <MemberBtn
            condition={kid === 0}
            clickEvent={() => setKid(kid-1)}>-</MemberBtn>
          <span>{kid}</span>
          <MemberBtn
            condition={kid === 16}
            clickEvent={() => setKid(kid+1)}>+</MemberBtn>
        </MemberRight>
      </li>
      <li key="baby">
        <MemberLeft>
          <h6>유아</h6>
          <p>2세 미만</p>
        </MemberLeft>
        <MemberRight>
          <MemberBtn
            condition={baby === 0}
            clickEvent={() => setBaby(baby-1)}>-</MemberBtn>
          <span>{baby}</span>
          <MemberBtn
            condition={baby === 16}
            clickEvent={() => setBaby(baby+1)}>+</MemberBtn>
        </MemberRight>
      </li>
    </DetailMember>
  )
}

export default SearchMember
