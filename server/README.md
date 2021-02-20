## AirTnT: Back-End
### Structure
```
server
├── app.js                  - Express 서버 진입지점, 미들웨어 관리 
├── bin/   
│   └── www                 - 서버실행 스크립트(HTTP모듈 - Express모듈 연동)
│
├── database/               - 간이 Database(JS파일)
│   ├── restsData.js        - 숙소정보 Database(150개 숙소데이터 랜덤생성)
│   └── usersData.js        - 회원정보 Database
│
├── node_modules/           - Express-generator 모듈 번들
│
├── public/                 - 리소스 파일저장(미사용)               
│
├── routes/              
│   ├── rests.js            - /rests 경로 숙소리스트, 숙소상세 라우터 (검색, 필터, 페이지네이션 포함)
│   └── users.js            - /users 경로 로그인/회원가입 라우터 (Validation 포함)
│
├── views/                  - 로그인/회원가입 테스트 임의 HTML 활용(.pug)
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore



```
<br />

### OutCome
1. 서버
   - app.js 진입파일 설정, Express-generator 패키지 활용
   - 각 Router 불러오기(require), app.use() Root Path 연동
   - 미들웨어 연동(cookie-parser, cors 등)
<br />

2. 미들웨어 
   - cors : 클라이언트(포트 3000), 서버(포트 5000) 통신을 위한 미들웨어
   - bcrypt : 비밀번호 암호화 해싱(hashSync), 비교(compareSync) 위한 미들웨어
   - jsonwebtoken : 회원 로그인 시, Response 토큰동봉을 위한 미들웨어
<br />

3. 라우터(routes/)
   - /users/signup : 회원가입 Request Body 검사(빈값 여부, 정규식, DB동일 이메일 여부), 양호시 DB저장 및 SUCCESS Response
   - /users/signin : 로그인 Request Body 검사(빈값 여부, DB존재 계정 및 비밀번호 일치여부), 양호시 SUCCESS 및 토큰 Response
   - /rests : 숙소리스트 Response -> Query string 검색 및 필터 로직, LIMIT(15개) 단위 페이지네이션
   - /rests/detail : 숙소 1개 정보 Response -> Semantic URL (/:id) 변수값 매칭
<br />

4. 데이터베이스(database/)
   - usersData.js : 회원가입 시 정보저장(id: new Date(), 비밀번호 해시), 회원가입 이메일 존재여부 및 로그인 정보비교 활용
   - restsData.js : 숙소 150개 정보 배열저장 (일부 정보값 랜덤생성, 해당 로직포함)
<br />
