# React 2nd Project: Airbnb

## About
- 개요 : 대표 부킹서비스 Airbnb(에어비앤비) 웹사이트 클론 프로젝트
- 기간 : 1.25(월) ~ 2.10(수) / 17일간
- 원본 : https://www.airbnb.co.kr/ (에어비앤비 코리아)

## Skill Stack
### Front-End
- HTML/CSS/Javascript
- React.js(CRA): Functional Component
- Styled Components
- Context API(useContext)
- react-router-dom
- react-icons(각종 아이콘)
- react-dates, moment(달력)
- rsuite(슬라이더 바)

### Back-End
- Node.js
- Express.js(Generator)
- npm Middlewares: bcrypt, jsonwebtoken, cors

## Outcome
- 영상

### Front-End
1. [공통] `<Navbar>`
  - 스크롤에 따른 UI디자인 및 Sticky 전환: Global State 활용(Home은 전환, List/Detail은 Sticky 고정)
  - 우측 버튼 클릭시, 메뉴박스 구현: 로그인/회원가입 모달창 on/off 연동
  - 스크롤에 따른 중앙 SearchBar 전환: 기본 On, 스크롤 시 Off(버튼 클릭시 다시 On)
  - SearchBar 정보 입력기능 구현: 장소검색(Input박스), 날짜선택(react-dates), 게스트 인원조정 -> state값 SearchBar 표현
  - SearchBar 검색기능 구현: 검색버튼 클릭시, List 페이지 이동 -> 장소 검색값은 fetch() 쿼리스트링에 추가
  - props에 따른 내부 width 가변: Home, List 페이지 1600px, Detail 페이지 1120px

2. [공통] `<Footer>`
  - 기본UI 구현: 링크목록 데이터 Mapping
  - props에 따른 내부 width 가변: Home, List 페이지 1600px, Detail 페이지 1120px(+rights 텍스트 줄바꿈)
  
3. 로그인/회원가입 모달창
  - `<Navbar>` 우측 버튼 클릭시 on/off 연동
  - signModalOn state로 on/off 제어: 조건부 렌더링 아닌 className 삼항연산자 구현(translateY, opacity 애니메이션 위함)
  - signMode state로 모달창 모드제어: 하나의 모달창에 다른내용 표현. Navbar 메뉴버튼, 모달창 하단버튼으로 로그인-회원가입 전환가능.
  - Request Validation 구현(Submit 시, 원본과 동일): 입력값 이상 시, Input박스 테두리색 변경 및 하단 에러 메세지 발생
  - 서버 fetch() 로직 적용: HTTP "POST" 및 JSON.stringify() 입력값 state 서버 전달, 비동기로 Response 처리
  - Response Validation 구현: success(boolean), message 따른 오류내용 alert. 정상시, 모달창 종료(로그인은 token localStorage 저장).
  
4. Home 페이지
  - 기본UI 구현: Styled-Components로 커스텀한 GridBox 재활용
  
5. List 페이지 좌측: Rests 목록
  - Context API 숙소 리스트 표현: 서버 fetch()로 가져온 숙소 리스트 표현(LIMIT = 15개)
  - `<RestsItem>` 숙소 클릭시 상세 페이지 이동: URL path parameter (= 숙소 id값)
  - `<RestsItem>` 사진 슬라이더: `<Carousel>` 컴포넌트 제작 및 적용, Hover된 숙소 아이템만 슬라이더 화살표 버튼 표현
  - Pagination 구현: (전체 숙소수)/15 개 페이지 버튼표현. 클릭시 페이지 변경(page state 변동시마다 데이터 fetch())
  - Filtering 구현: 숙소타입, 가격(rsuit 슬라이더바), 침대/침실 수 필터박스 구현 -> "저장" 클릭시, 쿼리스트링 추가하여 데이터 fetch()
  
6. List 페이지 우측: 지도
  - Kakao Maps API 활용 지도구현: state 기본값 기준 지도표현(lang(37.5024), long(126.7772)). 드래그 및 줌 이벤트 시, lang, long, zoom state 최신화
  - 지도 우측 상단 zoom버튼 구현: +,- 버튼 클릭시 zoom state 가감. 이에 따른 지도 확대율 변화
  - 지도 Marker 구현: 각 숙소들 위치에 Pinning. 클릭 이벤트 시 숙소정보 박스 표시.
  - `<MapModal>` 숙소정보 박스: 마커 클릭시, 해당숙소 정보박스 표시. 지도클릭, 드래그, 줌 이벤트 시 모달창 꺼짐.
  - `<MapModal>` 유동적 

7. Detail 페이지

### Back-End
