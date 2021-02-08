import React from 'react'
import styled from 'styled-components';
import { flexAlign } from '../../../../Styles/theme';
import DetailConBox from '../../DetailConBox';
import DetailCircleImg from '../../DetailCircleImg';
import { BsStarFill } from 'react-icons/bs';
import { HiShieldCheck } from 'react-icons/hi';

const AddHost = () => {
  return (
    <DetailConBox>
      <HostHeader>
        <DetailCircleImg src={`/images/default3.jpg`} alt='host-profile' length="70px" marginRight="20px" />
        <div>
          <h5>{`호스트: Ttaengg 님`}</h5>
          <span>{`회원 가입일: 2015년 2월`}</span>
        </div>
      </HostHeader>
      <HostGridBox>
        <HostGridLeft>
          <HostLeftSummery>
            <p><BsStarFill />{`후기 63개`}</p>
            <p><HiShieldCheck />본인 인증 완료</p>
          </HostLeftSummery>
          <HostLeftDesc>
            Hello dear friends, I’m Seunghee, your Airbnb host. I work as a designer and I also run a cafe here in Seoul. I love traveling and meeting new people, and I wish for ZARA to be that place you can come home to after a day of exciting new experiences.
          </HostLeftDesc>
        </HostGridLeft>
      </HostGridBox>
    </DetailConBox>
  )
}

const HostHeader = styled.header`
  ${flexAlign};

  h5 {
    padding: 0 0 10px;
    font-size: 22px;
  }
`;

const HostGridBox = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > div {
    padding: 0 80px 0 0;
  }
`;

const HostGridLeft = styled.div`
`;

const HostLeftSummery = styled.div`
  ${flexAlign};
  margin: 20px 0;

  p {
    ${flexAlign};
    margin: 0 30px 0 0;

    svg {
      margin: 0 10px 0 0;
      fill: ${({ theme }) => theme.themePink };
    }
  }
`;

const HostLeftDesc = styled.p`
margin: 0 0 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
`;

export default AddHost
