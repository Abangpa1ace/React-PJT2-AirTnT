var express = require('express');
var router = express.Router();

const restsData = require('../database/restsData');

// List URL
router.get('/', function(req, res, next) {
  let restsList = restsData;
  const { search, filter, page, limit } = req.query;
  const Page = Number(page);
  const Limit = Number(limit)
  const startIdx = (Page - 1) * Limit;

  if (search) {
    const { location } = search;

    if (location) {
      restsList = restsList.filter(rest => rest.title.includes(location))
    }
  }
  
  if (filter) {
    const { type, price, bed, bedroom, bathroom } = filter;

    if (type) {
      const typeList = type.split(',');
      restsList = restsList.filter(rest => typeList.includes(rest.category.typeEn));
    }
    if (price) {
      const priceRange = price.split(',');
      restsList = restsList.filter(rest => rest.price >= priceRange[0] && rest.price <= priceRange[1]);
    }

    if (bed) {
      restsList = restsList.filter(rest => rest.mainInfo['bed'] >= bed);
    }
    if (bedroom) {
      restsList = restsList.filter(rest => rest.mainInfo['bedroom'] >= bedroom);
    }
    if (bathroom) {
      restsList = restsList.filter(rest => rest.mainInfo['bathroom'] >= bathroom);
    }
  }
  
  const restsTotal = restsList.length;
  const pagedRestsList = restsList.slice(startIdx, startIdx + Limit);
  
  res.json({
    restsTotal: restsTotal,
    restsList: pagedRestsList,
  });
});



// Detail URL
router.get('/detail/:id', function(req, res, next) {
  const restDetail = restsData.find((rest) => rest.id === Number(req.params.id));
  res.json(restDetail);
});

module.exports = router;