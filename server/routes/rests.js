var express = require('express');
var router = express.Router();

const restsData = require('../database/restsData');

router.get('/', function(req, res, next) {
  let restList = restsData;
  const Query = req.query;

  const emptyQuery = Object.keys(Query).length === 0;
  if(!emptyQuery) {
    const page = Number(Query.page);
    const limit = Number(Query.limit)
    const startIdx = (page - 1) * limit;
    restList = restList.slice(startIdx, startIdx + limit + 1);
  }
  res.json(restList);
});

router.get('/detail/:id', function(req, res, next) {
  const restDetail = restsData.find((rest) => rest.id === Number(req.params.id));
  res.json(restDetail);
});

module.exports = router;