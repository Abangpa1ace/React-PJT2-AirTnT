import React from 'react'
import styled from 'styled-components';
import DetailConBox from '../../DetailConBox';
import DetailCircleImg from '../../DetailCircleImg';
import { Button } from '../../../../Components/Global/GlobalComponent';
import { flexAlign } from '../../../../Styles/theme';
import { BsStarFill } from 'react-icons/bs';
import { FaUserShield } from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi';

const AddHost = () => {
  return (
    <DetailConBox>
      <HostHeader>
        <DetailCircleImg src={`/images/default3.jpg`} alt='host-profile' length="70px" marginRight="20px" />
        <div>
          <h5>{`호스트: 김태형 님`}</h5>
          <span>{`회원 가입일: 2015년 2월`}</span>
        </div>
      </HostHeader>
      <HostGridBox>
        <HostGridLeft>
          <HostLeftProfile>
            <p><BsStarFill />{`후기 63개`}</p>
            <p><HiShieldCheck />본인 인증 완료</p>
          </HostLeftProfile>
          <HostLeftDesc>
            Hello dear friends, I’m Tae Hyung, your Airbnb host. I work as a designer and I also run a cafe here in Seoul. I love traveling and meeting new people, and I wish for ZARA to be that place you can come home to after a day of exciting new experiences.
          </HostLeftDesc>
          <HostLeftMoreInfo>
            <p>숙박 중 게스트와의 교류</p>
            <p>저는 게스트의 프라이버스를 존중합니다. 불편한 사항이나 궁금한 점은 에어비앤비 채팅창으로 문의 주시면 빠른 답변을 해드립니다.</p>
          </HostLeftMoreInfo>
          <HostLeftMoreInfo>
            <p>{`태형님은 슈퍼호스트 입니다.`}</p>
            <p>슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.</p>
          </HostLeftMoreInfo>
        </HostGridLeft>
        <HostGridRight>
          <p>{`응답률: 100%`}</p>
          <p>{`응답시간: 1시간 이내`}</p>
          <Button
            padding="15px 25px"
            margin="30px 0 20px"
            border={({ theme }) => theme.themeBlack}
            fontSize="16px"
            backgroundHov={({ theme }) => theme.gray0}
            radius="10px"
          >
            호스트에게 연락하기
          </Button>
          <HostRightSecure>
            <FaUserShield />
            <span>안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.</span>
          </HostRightSecure>
        </HostGridRight>
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

const HostGridBox = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 30px 0 0;

  section {
    padding: 0 100px 0 0;
  }
`;

const HostGridLeft = styled.section`
`;

const HostLeftProfile = styled.div`
  ${flexAlign};

  p {
    ${flexAlign};
    margin: 0 24px 0 0;

    svg {
      margin: 0 10px 0 0;
      fill: ${({ theme }) => theme.themePink };
      transform: translateY(-1px);
    }
  }
`;

const HostLeftDesc = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
`;

const HostLeftMoreInfo = styled.div`
  margin: 30px 0 0;

  p:first-child {
    font-weight: bold;
  }
`;

const HostGridRight = styled.section`
`;

const HostRightSecure = styled.div`
  ${flexAlign};

  svg {
    margin: 0 15px 0 0;
  }

  span {
    width: 260px;
    color: initial;
    font-size: 12px;
  }
`;

export default AddHost
