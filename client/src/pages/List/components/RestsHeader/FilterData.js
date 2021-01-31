import FilterFacilities from "./FilterModals/FilterFacilities";
import FilterPrice from "./FilterModals/FilterPrice";
import FilterTypes from "./FilterModals/FilterTypes";

export const FILTERMODALS = [
  {
    id: 0,
    filter: '숙소유형',
    modal: <FilterTypes />,
  },
  {
    id: 1,
    filter: '요금',
    modal: <FilterPrice />,
  },
  {
    id: 2,
    filter: '침실과 침대',
    modal: <FilterFacilities />,
  },
  {
    id: 3,
    filter: '즉시 예약',
    modal: <FilterTypes />,
  },
  {
    id: 4,
    filter: '필터 추가하기',
    modal: <FilterTypes />,
  },
];

export const TYPESDATA = [
  {
    id: 0,
    typeEn: 'total',
    title: '전체',
    desc: '집 전체를 단독으로 사용합니다',
    checked: false,
  },
  {
    id: 1,
    typeEn: 'private',
    title: '개인실',
    desc: '침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다',
    checked: false,
  },
  {
    id: 2,
    typeEn: 'hotel',
    title: '호텔 객실',
    desc: '부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다',
    checked: false,
  },
  {
    id: 3,
    typeEn: 'common',
    title: '다인실',
    desc: '사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다',
    checked: false,
  },
]

export const FACILITYDATA = [
  {
    id: 0,
    infoEn: 'bed',
    title: '침대',
  },
  {
    id: 1,
    infoEn: 'bedroom',
    title: '침실',
  },
  {
    id: 2,
    infoEn: 'bathroom',
    title: '욕실',
  },
]