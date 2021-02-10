import { BiDish } from 'react-icons/bi';
import { BsHouseDoor, BsWifi, BsFillCalendarFill } from 'react-icons/bs'
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { FiAlertCircle } from 'react-icons/fi';
import { FaInternetExplorer, FaDog } from 'react-icons/fa';
import { GiPartyPopper, GiHighGrass, GiHeartburn, GiStoneWall, GiBrightExplosion, GiWindSlap, GiForkKnifeSpoon, GiCookingPot, GiFireplace } from 'react-icons/gi'
import { GrLocation, GrCalendar, GrNotes } from 'react-icons/gr';
import { RiSurgicalMaskLine, RiComputerLine, RiParkingBoxLine } from 'react-icons/ri';
import { MdVideoLabel, MdSmokeFree } from 'react-icons/md';
import { SiApacheairflow } from 'react-icons/si';
import { WiTime2, WiTime10 } from 'react-icons/wi';

export const DETAIL_NOTICE = [
  {
    id: 0,
    svg: <BsHouseDoor />,
    text: '집 전체',
    desc: '게스트 스위트 전체를 단독으로 사용하시게 됩니다.',
  },
  {
    id: 1,
    svg: <GiBrightExplosion/>,
    text: '청결 강화',
    desc: '에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한 호스트입니다.',
    link: '/',
  },
  {
    id: 2,
    svg: <GrLocation />,
    text: '훌륭한 숙소 위치',
    desc: '최근 숙박한 게스트 중 100%가 위치에 별점 5점을 준 숙소입니다.',
  },
  {
    id: 3,
    svg: <GrCalendar />,
    text: '환불 정책',
    desc: '3월 2일 12:00 PM 전에 예약을 취소하면 총 숙박 요금의 50% 및 서비스 수수료 전액이 환불됩니다.',
    link: '/',
  },
  {
    id: 4,
    svg: <GrNotes />,
    text: '숙소 이용규칙',
    desc: '만 12세 미만의 어린이 동반에 적합하지 않은 숙소이며, 반려동물 동반, 파티, 흡연이 금지됩니다.',
    link: '/',
  },
]

export const FACILITY_LIST = ['무선 인터넷', '헤어드라이어', 'TV', 'Wi-fi', '컴퓨터', '식기', '취사도구', '무료 주차', '에어컨', '난방', '온돌', '화재경보기', '냉장고', '전자레인지', '정원', '반려견 동반가능']

export const FACILITY_ICONS = {
  '무선 인터넷': <FaInternetExplorer />,
  '헤어드라이어': <GiWindSlap />,
  'TV': <MdVideoLabel />, 
  'Wi-fi': <BsWifi />, 
  '컴퓨터': <RiComputerLine />, 
  '식기': <GiForkKnifeSpoon />,
  '취사도구': <GiCookingPot />, 
  '무료 주차': <RiParkingBoxLine />, 
  '에어컨': <SiApacheairflow />, 
  '난방': <GiFireplace />, 
  '온돌': <GiStoneWall />, 
  '화재경보기': <GiHeartburn />, 
  '냉장고': <CgSmartHomeRefrigerator />, 
  '전자레인지': <BiDish />, 
  '정원': <GiHighGrass />, 
  '반려견 동반가능': <FaDog />,
}

export const REVIEW_SCORE = [
  {
    id: 0,
    text: '청결도',
    key: 'clean',
  },
  {
    id: 1,
    text: '정확성',
    key: 'accuracy',
  },
  {
    id: 2,
    text: '의사소통',
    key: 'communication',
  },
  {
    id: 3,
    text: '위치',
    key: 'spot',
  },
  {
    id: 4,
    text: '체크인',
    key: 'check',
  },
  {
    id: 5,
    text: '가격 대비 만족도',
    key: 'cost_effective',
  },
]

export const REVIEW_RECORD = [
  {
    id: 0,
    img: '/images/default3.jpg',
    name: '탱이',
    date: '2021년 1월',
    content: `여기는 진짜 여태껏 가 본 숙소중에 가장 만족스러웠습니다. 다음번에 또 오고싶어요.`,
  },
  {
    id: 1,
    img: '/images/default3.jpg',
    name: '깨비',
    date: '2021년 1월',
    content: `호스트 분도 너무 친절하시고 꼼꼼히 배려해주셨고요, 공간은 사진으로 본 것 보다 더 예쁜데다 심지어 넓었습니다.`,
  },
  {
    id: 2,
    img: '/images/default3.jpg',
    name: '태진',
    date: '2021년 1월',
    content: `다음번에 또 오고싶어요.`,
  },
  {
    id: 3,
    img: '/images/default3.jpg',
    name: 'Hwang',
    date: '2021년 1월',
    content: `망원역에 가깝고 주변 구경할 것들이 많아서 좋아요! 집이 넓고 음향기기가 맘에 들어서 즐겁게 술먹구 놀았어요!`,
  },
  {
    id: 4,
    img: '/images/default3.jpg',
    name: '병진',
    date: '2021년 1월',
    content: `사진으로 봤던 것처럼 분위기도 좋고 구석구석 예쁜 인테리어 덕분에 머무는 내내 좋았고 더 머물고 싶을 정도로 편했습니다ㅎㅎ `,
  },
  {
    id: 5,
    img: '/images/default3.jpg',
    name: '지원',
    date: '2021년 1월',
    content: `너무 예뻤어요.`,
  },
]

export const RULES_LIST = [
  {
    id: 0,
    title: '숙소 이용규칙',
    list: [
      {
        svg: <WiTime2 />,
        desc: `체크인 시간: 오후 2:00 이후`,
      },
      {
        svg: <WiTime10 />,
        desc: `체크아웃 시간: 오전 10:00`,
      },
      {
        svg: <BsHouseDoor />,
        desc: `스마트록(으)로 셀프 체크인`,
      },
      {
        svg: <MdSmokeFree />,
        desc: `흡연 금지`,
      },
      {
        svg: <FaDog />,
        desc: `반려동물 동반 불가`,
      },
      {
        svg: <GiPartyPopper />,
        desc: `파티나 이벤트 금지`,
      },
      {
        svg: <BsFillCalendarFill />,
        desc: `28박 이상의 장기 숙박 가능`,
      },
    ]
  },
  {
    id: 1,
    title: '건강과 안전',
    list: [
      {
        svg: <GiBrightExplosion />,
        desc: `에어비앤비의 강화된 청소 절차 준수에 동의했습니다.`,
      },
      {
        svg: <RiSurgicalMaskLine/>,
        desc: `에어비앤비의 사회적 거리 두기 및 관련 가이드라인이 적용됩니다.`,
      },
      {
        svg: <FiAlertCircle />,
        desc: `화재경보기 없음`,
      },
      {
        svg: <FiAlertCircle />,
        desc: `일산화탄소 경보기 필요 없음`,
      },
    ]
  },
  {
    id: 2,
    title: '환불 정책',
    list: [
      {
        desc: `체크인 5일 전까지 수수료 없이 취소 가능.`,
      },
      {
        desc: `그 이후로는 체크인 전에 취소하면 첫 1박 요금과 서비스 수수료를 제외하고 50%가 환불됩니다.`,
      },
    ]
  },
]