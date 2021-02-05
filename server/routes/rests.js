var express = require('express');
var router = express.Router();

const restsData = require('../database/restsData');

router.get('/', function(req, res, next) {
  let restsList = restsData;
  let restsTotal = restsData.length;
  const Query = req.query;
  const { search, page, limit } = Query;

  const emptyQuery = Object.keys(Query).length === 0;
  if(!emptyQuery) {
    const Page = Number(page);
    const Limit = Number(limit)
    const startIdx = (Page - 1) * Limit;
    if (search.location) {
      restsList = restsList.filter(rest => rest.title.includes(search.location))
      restsTotal = restsList.length
    }
    sortedRestsList = restsList.slice(startIdx, startIdx + Limit);
  }
  res.json({
    restsTotal: restsTotal,
    restsList: sortedRestsList
  });
});

router.get('/detail/:id', function(req, res, next) {
  const restDetail = restsData.find((rest) => rest.id === Number(req.params.id));
  res.json(restDetail);
});

module.exports = router;