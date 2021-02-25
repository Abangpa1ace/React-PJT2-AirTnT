# React 2nd Project: AirTnT

## About
- 개요 : 대표 부킹서비스 Airbnb(에어비앤비) 웹사이트 클론 프로젝트
- 기간 : 1.25(월) ~ 2.10(수) / 17일간
- 원본 : https://www.airbnb.co.kr/ (에어비앤비 코리아)
<br />

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
<br />

## Outcome
- 영상

### Front-End
- 파일구조 및 작업내용: https://github.com/Abangpa1ace/React-PJT2-Airbnb/blob/main/client/README.md

### Back-End
- 파일구조 및 작업내용: https://github.com/Abangpa1ace/React-PJT2-AirTnT/blob/main/server/README.md
<br />

## Review
#### 1. 첫 개인 프로젝트
내 인생의 두 번째 웹페이지 제작이자, 이번에는 혼자서 진행하게 된 프로젝트였다. 
1차때 3명분의 작업량을 혼자 해보고자 했는데, 작업량이 많다 보니 하나의 기능에 대한 디테일을 파고들기가 여간 어려운 것이 아니었다.
또, Express.js 로 서버까지 만들어본 경험이 뿌듯한 한편, 구현우선으로 공부하다보니 catch-up을 위해 블로그로 개념을 늦게나마 정리했다.
<br />

우선, 목표 작업량과 서버구현까지 혼자서 완성했고 사이트의 퀄리티도 높은 편이어서, 학습적으로나 결과물적으로나 뿌듯한 프로젝트다.
개인으로 진행해보니 초기세팅, 컨벤션이 일관되어 작업이 수월한 한편, 스스로 모든기능을 고민하고 결정하기 위한 선택&집중, 페이스 관리의 중요성을 느꼈다.
무엇보다 개발업무의 꽃인 협업과 공통관리의 경험이 제한되는 점이 1차 팀 프로젝트에 비해 아쉽게 다가왔다.
<br />

#### 2. 새로 배우게 된 것들
- Functional Components 숙달 : props 전달 및 기본 Hooks(useState, useEffect) 활용
- styled-components 라이브러리 : CSS-in-JS 숙달, 커스텀 컴포넌트 재활용, ThemeProvider 공통 & createGlobalStyle 리셋속성
- Context API 대규모 어플리케이션 적용 : Navbar 전역 State UI제어, 숙소정보 전역 State Props-Drilling 최소화 등
- React-dates 캘린더 라이브러리 활용 날짜지정 서비스 구현(moment 날짜형태 사용)
- KakaoMap API 활용 지도 서비스 구현 : 기본기능 + 정보 모달창 On/Off, 마커 위치에 따른 표시위치 계산
- fetch(GET) 요청시 Path Parameter(id), Query String(search, filter, pagination) 반영
- Node.js, Express.js 서버 구현 : Router, Query String 기본개념 적용, 미들웨어 활용(인증/인가, CORS) 
<br />

#### 3. 피드백
혼자서 진행하다보니, 많은 양을 욕심부린만큼 디테일에서 아쉬운 부분들도 분명 생겼다.
- 반응형 미구현 : narrow-size를 고려하지 않은 styled-components 수정소요가 예상된다.
- Context API 기능과다 : 하나의 context.js 에 모든 기능이 집중되어 비효율적일 것 같다. 불필요 전역State 선별, Context 분리에 대해 고민해봐야겠다.
- Navbar 디테일 : 내부 컨텐츠 확대/축소 애니메이션, 검색바 값삭제 x버튼, 검색버튼 폭증가 시 검색바 폭축소(absolute X) 등 디테일한 UI구현이 부족했다.
- 라이브러리 커스터마이징 미적용 : react-dates(캘린더), rsuite(슬라이더바) CSS 미수정. 가격바 정규분포 고민해봤어도 좋은 경험이었을 것 같다.
- 페이지네이션 버튼 중간생략 미적용 : 버튼이 6개 이상일 때, 중간 값을 ...하고 4개/1개를 양 끝에 배치하는 방법을 고민해보고 싶었다.
- 다양한 지도API 활용 : KakaoMap은 마커 CSS가 안되서 커스텀 오버레이를 추가했다. 다음엔, Google Map을 사용해봐야겠다.
- Detail 페이지 모달창 미적용 : 상세 페이지는 간략한 정보를, 버튼을 누르면 모달창 등으로 추가정보를 표시했다. 이를 구현했다면 다양한 정보처리 방법을 고민할 수 있었을 것 같다.
- Back-End(Server) Database 미적용 : DB툴을 적용하지 않은, JS파일에 임시DB를 구현했다. 추후, 가용하다면 MySQL, MongoDB 등을 학습하여 서버 디테일을 높이고 싶다.
<br />

많은 페이지와 기능, 서버까지 시도한 것은 좋은 경험이었으나 그만큼 하나에 온연히 몰두하기가 쉽지 않았다. 3차 프로젝트는 기능을 줄이더라도 집중적으로 해볼 필요가 있다고 생각했다.
또한, 프로젝트 기간에 Styled-Components, Express 학습을 병행하니, 수정소요도 생기고 공부를 중간중간 해야하는게 부가적인 부담이었다.
3차 프로젝트 전에는, 추가 적용하려는 기술(Redux, 소셜로그인 API)에 대한 공부를 진행한 뒤 온전히 구현시도에 집중할 계획이다.
