import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../../Context';
import { flexCenter, flexBetween } from '../../../../styles/theme';
import CounterBtn from '../../../Common/CounterBtn';
import { GUESTCATEGORY } from '../../NavbarData'; 

const SearchMember = () => {
  const { updateSearchValue } = useGlobalContext();
  const [guestCount, setGuestCount] = useState({
    adult: 0,
    kid: 0,
    baby: 0,
  });
  
  const minusGuestCount = (name) => {
    const minusValue = guestCount[name] === 0 ? 0 : guestCount[name]-1;
    setGuestCount({
      ...guestCount,
      [name]: minusValue,
    })
  }

  const plusGuestCount = (name) => {
    const plusValue = guestCount[name] === 16 ? 16 : guestCount[name]+1;
    setGuestCount({
      ...guestCount,
      [name]: plusValue,
    })
  }

  useEffect(() => {
    const guestSum = Object.values(guestCount).reduce((a,b) => a+b);
    updateSearchValue('guest', guestSum);
  }, [guestCount, updateSearchValue])

  return (
    <DetailMember>
      {GUESTCATEGORY.map((category) => {
        const { id, group, title, desc } = category;
        return (
            <li key={id}>
              <MemberLeft>
                <h6>{title}</h6>
                <p>{desc}</p>
              </MemberLeft>
              <MemberRight>
                <CounterBtn
                  condition={guestCount[group] === 0}
                  clickEvent={() => minusGuestCount(group)}>-</CounterBtn>
                <span>{guestCount[group]}</span>
                <CounterBtn
                  condition={guestCount[group] === 16}
                  clickEvent={() => plusGuestCount(group)}>+</CounterBtn>
              </MemberRight>
            </li>
        )
      })}
    </DetailMember>
  )
}

const DetailMember = styled.ul`
  position: absolute;
  right: 0;
  width: 400px;
  background: #ffffff;
  padding: 30px;
  border-radius: ${({ theme }) => theme.radius };
  box-shadow: ${({ theme }) => theme.shadowDiagonal};
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

export default SearchMember;