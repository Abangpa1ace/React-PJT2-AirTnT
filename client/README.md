## AirTnT: Front-End
### Structure
```
client
├── node_modules                  - CRA 모듈
│
├── public/                   
│   ├── data/                     - mock-data(JSON 숙소리스트)
│   ├── images/                   - mock-data(임의 이미지)
│   └── index.html                - SPA HTML 페이지
│
└── src/                      
    ├── index.js                  - index.html ReactDOM 렌더링
    ├── Routes.js                 - Root Component, React 라우터
    │── Context.js                - Context API 중앙 상태관리
    │ 
    ├── Data/                     
    │   ├── config.js             - 서버 URL링크, `<svg>` 정보
    │   └── data.js               - mock-data(JS 숙소리스트)
    │ 
    ├── GlobalComponents/         
    │   ├── Carousel/             - `<Carousel>` 이미지 슬라이더
    │   │
    │   ├── Common/
    │   │   ├── CounterBtn.js     - 인원정보, 숙소정보 박스 +,- 버튼
    │   │   └── StyledCommon.js   - `<Link>`, `<button>`, `<img>`, GridBox 커스텀 컴포넌트
    │   │
    │   ├── Footer/               
    │   │   ├── components/       - Footer 구성 컴포넌트
    │   │   ├── Footer.js         - Footer 컨테이너 컴포넌트
    │   │   └── FooterData.js     - Footer 맵핑리스트 정보
    │   │
    │   ├── Modal/                - `<ModalContainer>` 모달창
    │   │
    │   └── Navbar/               
    │       ├── components/       - Navbar 구성 컴포넌트
    │       ├── SearchBar/        - `<SearchBar>` 검색창 및 구성 컴포넌트
    │       ├── SignModal/        - `<SignModal>` 로그인/회원가입 모달박스 및 구성 컴포넌트
    │       ├── Navbar.js         - Navbar 컨테이너 컴포넌트
    │       └── NavbarData.js     - Navbar 맵핑리스트 정보
    │ 
    ├── Pages/                    
    │   ├── Detail/               - Detail 상세 페이지
    │   │   ├── common/           - 상세 페이지 공통 컴포넌트(이미지 원형박스, 정보박스) 
    │   │   ├── components/       - 구성 컴포넌트 (DetailHeader, DetailInfo, DetailAside, DetailAdditional)
    │   │   ├── Detail.js         - 상세 페이지 컨테이너 컴포넌트
    │   │   └── DetailData.js     - 상세 페이지 맵핑리스트, `<svg>`
    │   │
    │   ├── Home/                 - Home 메인 페이지
    │   │   ├── components/       - 구성 컴포넌트 (CoronaNotice, 이미지 GridBox)
    │   │   ├── Home.js           - 메인 페이지 컨테이너 컴포넌트
    │   │   └── HomeData.js       - 메인 페이지 맵핑이미지
    │   │
    │   └── List/                 - List 숙소목록 페이지
    │       ├── ListMap/          - 우측 지도 및 정보 모달창 컴포넌트
    │       ├── ListRests/        - 좌측 숙소목록, 필터박스, 페이지네이션, 최근숙소 컴포넌트
    │       └── List.js           - 목록 페이지 컨테이너 컴포넌트
    │
    ├── Styles/                     
    │   ├── reset.js              - createGlobalStyle 초기화 속성
    │   └── theme.js              - theme(너비, 색깔, 그림자) 및 FlexBox 공용속성
    │
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── .gitignore

```
<br />

### OutCome
#### 1. [공통] `<Navbar>`
- 스크롤에 따른 UI디자인 및 Sticky 전환
- 스크롤 및 검색바 버튼클릭에 따른 SearchBar On/Off 전환
- 우측 버튼 클릭 시, 메뉴박스 구현(로그인/회원가입 모달창 On/Off 연동)
- props에 따른 내부 width 가변
<br />

#### 2. [공통] Navbar 하단 검색바 `<SearchBar>`
- SearchBar 활성화 시, 각 입력창 focus 및 검색버튼 UI변경 구현
- 입력정보 상태관리: 장소(input), 체크인/아웃(moment) + 날짜간격, 게스트 인원조정
- 각 입력값에 대한 기능박스 하단 적용: 장소(자동완성 버튼), 체크인/아웃(react-dates), 게스트 인원조정(+,- 버튼 카운트)
- 검색버튼 클릭시, List 페이지 이동 (장소 검색값은 fetch() 쿼리스트링에 추가)
<br />

#### 3. [공통] Navbar 메뉴박스 연동 로그인/회원가입 `<SignModal>`
- `<Navbar>` 우측 버튼 클릭시 on/off 연동
- signModalOn state로 on/off 애니메이션 제어
- signMode state로 하나의 모달창에 로그인/회원가입 모드 제어
- Request Validation 구현(Submit 시, 원본과 동일): 입력값 이상 시, Input박스 테두리색 변경 및 하단 에러 메세지 발생
- 서버 fetch() 로직 적용: HTTP "POST" 및 JSON.stringify() 입력값 state 서버 전달, 비동기로 Response 처리
- Response Validation 구현: success(boolean), message 따른 오류내용 alert. 정상시, 모달창 종료(로그인은 token localStorage 저장).
<br />

#### 4. [공통] `<Footer>`
- 기본UI 구현(링크목록 데이터 Mapping)
- props에 따른 내부 width 가변
<br />

#### 5. Home 페이지
- 기본UI 구현(Styled-Components 커스텀한 GridBox 재활용)
<br />

#### 6-1. List 페이지 좌측: Rests 목록
- Context API 숙소 리스트 표현(LIMIT = 15개)
- `<RestsItem>` 숙소 클릭시 상세 페이지 이동(/:id path parameter)
- 사진 슬라이더 `<Carousel>` 컴포넌트 제작 및 적용(Hover 시 화살표)
- Pagination 구현: (전체 숙소수)/15 개 버튼. 클릭시 페이지 변경(page state 변동시마다 데이터 fetch())
- Filtering 구현: 숙소타입, 가격(rsuit 슬라이더바), 침대/침실 수 필터박스 구현 -> 저장버튼 클리깃, 쿼리스트링 추가 데이터 fetch()
<br />

#### 6-2. List 페이지 우측: 지도
- Kakao Maps API 활용 지도구현
- 지도 우측 상단 zoom 버튼 클릭시 확대/축소 적용
- 지도 Marker 구현: 각 숙소 위/고도 Pinning. 클릭시 숙소정보 박스 표시.
- `<MapModal>` 숙소정보 박스 마커 클릭시 표시(***마커 위치에 따라 표시되는 방향 달라짐***)
- 지도 Custom Overlay 구현: 가격정보 포함. 좌측 숙소 Hover시, 해당 Custom Overlay 색상변경
<br />

#### 7. Detail 페이지
- 기본 UI구현. 정보 fetch() 데이터 연동. 프로필 원이미지, 정보박스 컴포넌트 재활용.
- `<HeaderImgGrid>` imageList 5개 활용한 GridBox 구현
- 정보란 좌측 일부 데이터 맵핑, 달력(react-dates) 및 날짜정보 연동 등
- 정보란 우측 Sticky Box 구현. 입력정보 연동, 숙소가격 및 숙박일수 계산로직 적용.
- 추가정보 평점란 `<AddReview>` 전체평점 평균계산, 항목별 평점값에 따른 게이지 바 로직적용.
