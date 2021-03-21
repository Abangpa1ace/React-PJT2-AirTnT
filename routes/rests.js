var express = require('express');
var router = express.Router();

const restsData = require('../database/restsData');

// List Router
router.get('/', function(req, res, next) {
  let restsList = restsData;
  const { search, filter, page, limit } = req.query;

  if (search) {
    restsList = searchByQuery(search, restsList)
  }
  
  if (filter) {
    restsList = filterByQuery(filter, restsList)
  }

  res.json(restsResponse(page, limit, restsList));
});

// List Functions
const searchByQuery = (search, list) => {
  let newList = list
  const searchObj = {
    location: (location) => {
      newList = newList.filter(rest => rest.title.includes(location))
    }
  }
  for (let key in search) {
    searchObj[key](search[key]);
  }
  return newList;
}

const filterByQuery = (filter, list) => {
  let newList = list;
  const filterObj = {
    type: (type) => {
      const typeList = type.split(',');
      newList = newList.filter(rest => typeList.includes(rest.category.typeEn));
    },
    price: (price) => {
      const priceRange = price.split(',');
      newList = newList.filter(rest => rest.price >= priceRange[0] && rest.price <= priceRange[1]);
    },
    bed: (bed) => {
      newList = newList.filter(rest => rest.mainInfo['bed'] >= bed);
    },
    bedroom: (bedroom) => {
      newList = newList.filter(rest => rest.mainInfo['bedroom'] >= bedroom);
    },
    bathroom: (bathroom) => {
      newList = newList.filter(rest => rest.mainInfo['bathroom'] >= bathroom);
    }
  }
  for (let key in filter) {
    filterObj[key](filter[key]);
  }
  return newList;
}

const restsResponse = (page, limit, list) => {
  const Page = Number(page);
  const Limit = Number(limit)
  const startIdx = (Page - 1) * Limit;
  const restsTotal = list.length;
  const restsList = list.slice(startIdx, startIdx + Limit);
  return {
    restsTotal,
    restsList,
  }
}

// Detail Router
router.get('/detail/:id', function(req, res, next) {
  const restDetail = restsData.find((rest) => rest.id === Number(req.params.id));
  res.json(restDetail);
});

module.exports = router;