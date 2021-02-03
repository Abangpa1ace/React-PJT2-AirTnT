var express = require('express');
var router = express.Router();

router.get('/list', function(req, res, next) {
  let restList = restsData;
  const Query = req.query;

  const emptyQuery = Object.keys(Query).length === 0;
  if(!emptyQuery) {
    const page = Number(Query.page);
    const limit = Number(Query.limit)
    const startIdx = (page - 1) * limit;
    restList = restList.slice(startIdx, startIdx + limit + 1);
  }
  res.json(restList)
});

router.get('/detail/:id', function(req, res, next) {
  const restDetail = restsData.find((rest) => rest.id === Number(req.params.id));
  res.json(restDetail);
});


// REST API
const restsData = [
  {
    "id": 100,
    "imageList": [
      "https://a0.muscache.com/im/pictures/049928e6-d486-40e4-8eeb-3376bd5c1670.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/0c3784e4-53d7-4ced-9daa-7626b44c3336.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/5500fe6c-625b-4f62-a97b-17d2b66e80d1.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/3092f646-e2bf-426d-895d-f413ffdf7263.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/30a9a161-aa55-430d-b1fd-108581d8358c.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/315c6ec8-5194-4147-9451-8556172d759d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/4c75a3a8-4eb8-4b49-b203-481d2dc15c59.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/5e143527-8918-492c-bdbe-7dfde6a620b9.jpg?im_w=720"
    ],
    "category": {
      "city": "마포",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 2,
      "bedroom": 1,
      "bed": 1,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 75095,
    "like": {
      "isLiked": true,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.5024,
      "long": 126.7772
    },
    "superHost": false
  },
  {
    "id": 101,
    "imageList": [
      "https://a0.muscache.com/im/pictures/106409b7-3073-4cb1-978a-ef6355085fdb.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/764cb14e-ab2b-4337-99be-f9b851dd3421.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/b095f2dc-2226-46fd-9dd8-8c7898f160d4.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/cac6e36c-e352-44ac-8f04-f4c79070b28b.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/764cb14e-ab2b-4337-99be-f9b851dd3421.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/b095f2dc-2226-46fd-9dd8-8c7898f160d4.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/da785852-29c7-4c14-8d83-26075e2f48ba.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/cac6e36c-e352-44ac-8f04-f4c79070b28b.jpg?im_w=960"
    ],
    "category": {
      "city": "마포",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 3,
      "bedroom": 0,
      "bed": 1,
      "bathroom": 0
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 82490,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.5224,
      "long": 126.7572
    },
    "superHost": false
  },
  {
    "id": 102,
    "imageList": [
      "https://a0.muscache.com/im/pictures/32d2bdfc-5915-4a50-be47-260b1c877d09.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/6ad4a939-b191-440a-ac32-61604768e726.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/7b954c05-6c1e-4f81-a587-d93ce5c85412.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/32d2bdfc-5915-4a50-be47-260b1c877d09.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/3c1e6c7a-d7b6-44f7-8e86-3712a03a6409.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/6ad4a939-b191-440a-ac32-61604768e726.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/49c6d8b2-d36f-4b4d-a06c-468b3803bdea.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/7b954c05-6c1e-4f81-a587-d93ce5c85412.jpg?im_w=480"
    ],
    "category": {
      "city": "마포",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 45921,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.5724,
      "long": 126.7472
    },
    "superHost": false
  },
  {
    "id": 103,
    "imageList": [
      "https://a0.muscache.com/im/pictures/00e5b41d-8464-46bc-910c-82ce6e753f9c.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/051806f9-8a96-4fb7-9b31-f2cb5cd68f2d.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/156313ed-59b4-4c39-92bf-55e587c39158.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/00e5b41d-8464-46bc-910c-82ce6e753f9c.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/051806f9-8a96-4fb7-9b31-f2cb5cd68f2d.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/7fc14995-ff22-487c-9dcf-5b9c12b488bb.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/156313ed-59b4-4c39-92bf-55e587c39158.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/a421a614-a1ce-475e-b8f2-d6ad3180e589.jpg?im_w=480"
    ],
    "category": {
      "city": "마포",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 62001,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.4524,
      "long": 126.7572
    },
    "superHost": false
  },
  {
    "id": 104,
    "imageList": [
      "https://a0.muscache.com/im/pictures/1e0b70f8-9d65-4d30-9215-fa47c26d259a.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/88cc87c7-89b0-4073-93a2-298922564d8c.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/5e06da7b-2b0d-4e02-9390-a3d34dc948bd.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/1e0b70f8-9d65-4d30-9215-fa47c26d259a.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/9d6450d0-9040-4ce1-b8c0-26c378039238.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/88cc87c7-89b0-4073-93a2-298922564d8c.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/7c8ea580-c887-4e15-85fe-3abc1d756e68.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/9d6450d0-9040-4ce1-b8c0-26c378039238.jpg?im_w=960"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 85021,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.5824,
      "long": 126.7272
    },
    "superHost": false
  },
  {
    "id": 105,
    "imageList": [
      "https://a0.muscache.com/im/pictures/1bc0b8a5-f8fe-473e-a552-526619cc3bcf.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/7f1cc820-9a53-435d-812f-3608dd53c105.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/81753fbf-0ea0-4d08-851e-a043801546ea.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/de2e9445-9d48-4c18-b722-cd63834633d7.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/9c0f8af4-9065-40f6-8fdd-cef68c320bbf.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/7f1cc820-9a53-435d-812f-3608dd53c105.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/81753fbf-0ea0-4d08-851e-a043801546ea.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/de2e9445-9d48-4c18-b722-cd63834633d7.jpg?im_w=480"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 78320,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.4124,
      "long": 126.8072
    },
    "superHost": false
  },
  {
    "id": 106,
    "imageList": [
      "https://a0.muscache.com/im/pictures/2f039806-33df-44f8-882d-6feafe1ea9a3.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6e7691a4-3da3-4fd4-9882-6e6c7615e091.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/35c2429d-debb-41c7-8cbc-10bfbd1bc7d4.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/e499c929-56a1-4eb7-a0ee-98df9af8e599.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/2f039806-33df-44f8-882d-6feafe1ea9a3.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/6e7691a4-3da3-4fd4-9882-6e6c7615e091.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/6b9c92d5-1b64-4fca-9393-751e5fe9ba9d.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/e499c929-56a1-4eb7-a0ee-98df9af8e599.jpg?im_w=480"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 100239,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.5224,
      "long": 126.8572
    },
    "superHost": false
  },
  {
    "id": 107,
    "imageList": [
      "https://a0.muscache.com/im/pictures/07473514-1e2f-4141-ac6d-26ad62dea903.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/298f759f-7ec2-4075-ba9a-eb94121ee12b.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/ea68c0e0-756b-40a0-bf9c-5841c4a40f8a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/07473514-1e2f-4141-ac6d-26ad62dea903.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/adbd1d0e-118c-48af-8716-e2fec0122c7c.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/a6acba46-a476-4b56-9d14-70f182258bc2.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/ea68c0e0-756b-40a0-bf9c-5841c4a40f8a.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/adbd1d0e-118c-48af-8716-e2fec0122c7c.jpg?im_w=320"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 62932,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.4624,
      "long": 126.7072
    },
    "superHost": false
  },
  {
    "id": 108,
    "imageList": [
      "https://a0.muscache.com/im/pictures/1ce7d484-41ff-49b8-b76a-befc582d5a8f.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/2c5728cb-85a9-48f2-91da-d7fdc64e144c.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/3495f5fb-7202-4b07-b7a4-58a8f653f54b.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/50fa496b-518f-4c1a-8d22-7dd0c4d7e9b2.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/b79234c9-6962-418e-a3eb-60257665b55e.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/50fa496b-518f-4c1a-8d22-7dd0c4d7e9b2.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/1ce7d484-41ff-49b8-b76a-befc582d5a8f.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/b79234c9-6962-418e-a3eb-60257665b55e.jpg?im_w=480"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 65021,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.4824,
      "long": 126.7272
    },
    "superHost": false
  },
  {
    "id": 109,
    "imageList": [
      "https://a0.muscache.com/im/pictures/2d81154e-8fb7-4c4f-ad43-9fcc4ed09d6a.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/a501fc87-cc14-43ab-8344-a812526c34ca.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/b7a53c24-3c1b-484d-8c15-03ffff214990.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/b907308c-fd3f-4688-9601-7fbbb69aa733.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/bbe68762-3fe1-4f0a-81f3-e9654905c221.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/a501fc87-cc14-43ab-8344-a812526c34ca.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/bbe68762-3fe1-4f0a-81f3-e9654905c221.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/b907308c-fd3f-4688-9601-7fbbb69aa733.jpg?im_w=480"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 85000,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.4024,
      "long": 126.7872
    },
    "superHost": false
  },
  {
    "id": 110,
    "imageList": [
      "https://a0.muscache.com/im/pictures/0725943c-285a-4d29-ab8b-39b1652e2194.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/3521d08f-9561-4b7c-bc55-87554baba191.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/46c0ece5-324e-4c23-b561-ceaebf9361fe.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/b0aaf3d5-8bb9-4567-8be6-2f51377b3037.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/e122e380-0871-4522-a915-14c09bf8da86.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/46c0ece5-324e-4c23-b561-ceaebf9361fe.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/0725943c-285a-4d29-ab8b-39b1652e2194.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/e122e380-0871-4522-a915-14c09bf8da86.jpg?im_w=480"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 90000,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.4124,
      "long": 126.6772
    },
    "superHost": false
  },
  {
    "id": 111,
    "imageList": [
      "https://a0.muscache.com/im/pictures/73c220b6-e292-4eb7-9a09-8ed1b2e4c8b6.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/b22c7b5a-91b2-4179-ae6a-269758ebed7a.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/b552fff4-5b4c-4450-8f9a-fc0a3bf2e827.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/73c220b6-e292-4eb7-9a09-8ed1b2e4c8b6.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/d74e9b75-712e-459a-b69c-2a8c3a45fa84.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/b552fff4-5b4c-4450-8f9a-fc0a3bf2e827.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/d74e9b75-712e-459a-b69c-2a8c3a45fa84.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/d8f0c3de-c479-41e8-a190-65a8892d49b1.jpg?im_w=480"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 42000,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.3824,
      "long": 126.8772
    },
    "superHost": false
  },
  {
    "id": 112,
    "imageList": [
      "https://a0.muscache.com/im/pictures/c8c39a3d-49a1-4191-8f3f-1b8c638e443b.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/b13c536a-14c9-4bb4-a0b1-cc203e0f7b1a.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/b2869d91-c866-4c58-99ba-cf21e1843483.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/c8c39a3d-49a1-4191-8f3f-1b8c638e443b.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/cf30ff5f-285b-484c-8cfe-1706811f3667.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/cfc65f2b-0f6c-4937-a088-c39fec8ceace.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/cf30ff5f-285b-484c-8cfe-1706811f3667.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/cfc65f2b-0f6c-4937-a088-c39fec8ceace.jpg?im_w=480"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 80000,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.4624,
      "long": 126.8372
    },
    "superHost": false
  },
  {
    "id": 113,
    "imageList": [
      "https://a0.muscache.com/im/pictures/61db8627-4323-48ca-8444-d0114635c21f.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/eab003c0-13bb-4422-a9d5-40b2ecdfa5ba.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/6efcb0ba-d228-4dad-a77b-6325a5268d6c.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/a104e147-ad65-4687-8c4d-a1ca4c4a52c2.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/b8dfa9ab-f49d-4842-83e9-90e2b9034a6f.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/6efcb0ba-d228-4dad-a77b-6325a5268d6c.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/b8dfa9ab-f49d-4842-83e9-90e2b9034a6f.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/eab003c0-13bb-4422-a9d5-40b2ecdfa5ba.jpg?im_w=480"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 95000,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.3724,
      "long": 126.7772
    },
    "superHost": false
  },
  {
    "id": 114,
    "imageList": [
      "https://a0.muscache.com/im/pictures/4dac53a6-3ba9-4760-8ca5-f6f7c11bc591.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/57171841-90e7-4234-b1ae-ceccee85a48f.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/b2a4a889-b64c-47c2-a605-65ec13039bd1.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/c790b910-3f19-4314-80e5-033ecfee4642.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/b2a4a889-b64c-47c2-a605-65ec13039bd1.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/e2c00948-26a5-44d3-9337-0543d4754874.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/c790b910-3f19-4314-80e5-033ecfee4642.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/e2c00948-26a5-44d3-9337-0543d4754874.jpg?im_w=960"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 105000,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.5324,
      "long": 126.6572
    },
    "superHost": false
  },
  {
    "id": 115,
    "imageList": [
      "https://a0.muscache.com/im/pictures/36fabf6b-0367-4b9e-ad56-d55ce4382790.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/511a7e40-445d-417a-a886-46a91907df03.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/8cb79153-0bb4-442a-9f38-18359e2d016e.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/511a7e40-445d-417a-a886-46a91907df03.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/634a7045-5fdd-46b3-bdab-55d1fa5d3b27.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/8cb79153-0bb4-442a-9f38-18359e2d016e.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/36fabf6b-0367-4b9e-ad56-d55ce4382790.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/d5a34634-66ac-4e78-aee4-42bde1593492.jpg?im_w=480"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 110000,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.4224,
      "long": 126.8772
    },
    "superHost": false
  },
  {
    "id": 116,
    "imageList": [
      "https://a0.muscache.com/im/pictures/0455b2cc-f353-40df-ace2-06854a681e71.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/29a7f7d1-4daa-4b61-8e76-1228e81e0ed5.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/0455b2cc-f353-40df-ace2-06854a681e71.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/29a7f7d1-4daa-4b61-8e76-1228e81e0ed5.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/451087d3-026b-46f3-a01b-57caf47394f9.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/78d7c0ef-9ced-4f24-89bb-310dfd20a041.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/451087d3-026b-46f3-a01b-57caf47394f9.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/e427d63d-e00b-45cd-b005-236961c95a44.jpg?im_w=480"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 65000,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.4824,
      "long": 126.6972
    },
    "superHost": false
  },
  {
    "id": 117,
    "imageList": [
      "https://a0.muscache.com/im/pictures/182af558-234e-48ff-974e-89db09a75377.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/2bededa5-2163-4a4e-a161-3a7f53710eb5.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/da0a5c14-e1e2-4bc8-8d0a-57c537dff64e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/54f8db1c-75c1-472e-b55c-8a83ec1c6b71.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/54f8db1c-75c1-472e-b55c-8a83ec1c6b71.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/c211740b-ef3d-4a2a-a3bd-13d02a285813.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/da0a5c14-e1e2-4bc8-8d0a-57c537dff64e.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/c211740b-ef3d-4a2a-a3bd-13d02a285813.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/54f8db1c-75c1-472e-b55c-8a83ec1c6b71.jpg?im_w=320"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 70000,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.4824,
      "long": 126.7272
    },
    "superHost": false
  },
  {
    "id": 118,
    "imageList": [
      "https://a0.muscache.com/im/pictures/37392644-ca74-4d27-9bdc-f831b70e5598.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/3e514292-4b31-4d8e-8477-da787d7d269d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/a196f028-ae4a-486f-9560-02cb0587e872.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/37392644-ca74-4d27-9bdc-f831b70e5598.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/3e514292-4b31-4d8e-8477-da787d7d269d.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/ee0164b6-7057-49a1-a44f-42a28e380dc9.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/a196f028-ae4a-486f-9560-02cb0587e872.jpg?im_w=320",
      "https://a0.muscache.com/im/pictures/ee0164b6-7057-49a1-a44f-42a28e380dc9.jpg?im_w=720"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 55000,
    "like": {
      "isLiked": false,
      "likeAvg": 4.87,
      "likeCount": 31
    },
    "location": {
      "lat": 37.4224,
      "long": 126.7272
    },
    "superHost": false
  },
  {
    "id": 119,
    "imageList": [
      "https://a0.muscache.com/im/pictures/2df10e7c-163f-407a-a8b4-9f34dd6aa8ff.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/33f355cf-0999-4158-95bc-cbf683beabf6.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/cfa4fab9-a1c6-4e4b-88ee-50656e9ac0a4.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/c7c115be-496f-4dcb-a8fd-04dd9cdbc85f.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/249de777-ca11-46a7-9dee-e8d88144823a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/ea2d1e50-b4c5-4fb4-ac81-1062f6d74897.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/c7c115be-496f-4dcb-a8fd-04dd9cdbc85f.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/cfa4fab9-a1c6-4e4b-88ee-50656e9ac0a4.jpg?im_w=720"
    ],
    "category": {
      "city": "홍대",
      "type": "콘도(아파트)",
      "validRoom": "전체"
    },
    "title": "망원역 도보3분거리/Clean and Cozy House #3",
    "mainInfo": {
      "maxGuest": 4,
      "bedroom": 2,
      "bed": 2,
      "bathroom": 1
    },
    "subInfo": [
      "무선인터넷",
      "에어컨",
      "무료 주차 공간",
      "주방"
    ],
    "price": 120000,
    "like": {
      "isLiked": false,
      "likeAvg": 4.53,
      "likeCount": 127
    },
    "location": {
      "lat": 37.4124,
      "long": 126.7572
    },
    "superHost": false
  }
]

module.exports = router;