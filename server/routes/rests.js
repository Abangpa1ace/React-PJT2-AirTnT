var express = require('express');
var router = express.Router();

const restsData = require('../database/restsData');

router.get('/', function(req, res, next) {
  let restsList = restsData;
  const restsTotal = restsData.length;
  const Query = req.query;

  const emptyQuery = Object.keys(Query).length === 0;
  if(!emptyQuery) {
    const page = Number(Query.page);
    const limit = Number(Query.limit)
    const startIdx = (page - 1) * limit;
    restsList = restsList.slice(startIdx, startIdx + limit);
  }
  res.json({
    restsTotal: restsTotal,
    restsList: restsList
  });
});

router.get('/detail/:id', function(req, res, next) {
  const restDetail = restsData.find((rest) => rest.id === Number(req.params.id));
  res.json(restDetail);
});

module.exports = router;