var express = require('express');
var router = express.Router();

const restsData = require('../database/restsData');

router.get('/', function(req, res, next) {
  let restsList = restsData;
  // let restsTotal = restsData.length;
  const Query = req.query;
  const { search, filter, page, limit } = Query;

  const emptyQuery = Object.keys(Query).length === 0;
  if(!emptyQuery) {
    const Page = Number(page);
    const Limit = Number(limit)
    const startIdx = (Page - 1) * Limit;

    if (search) {
      restsList = restsList.filter(rest => rest.title.includes(search.location))
    }

    const { type, price, facilities } = filter;
    if (type) {
      const typeList = type.split(',');
      restsList = restsList.filter(rest => typeList.includes(rest.category.typeEn));
    }
    

    restsTotal = restsList.length;
    pagedRestsList = restsList.slice(startIdx, startIdx + Limit);
  }
  res.json({
    restsTotal: restsTotal,
    restsList: pagedRestsList,
  });
});

router.get('/detail/:id', function(req, res, next) {
  const restDetail = restsData.find((rest) => rest.id === Number(req.params.id));
  res.json(restDetail);
});

module.exports = router;