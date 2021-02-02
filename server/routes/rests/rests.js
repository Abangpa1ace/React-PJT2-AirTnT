var express = require('express');
var router = express.Router();
var restsData = require('../../public/javascripts/restsData');

router.get('/', function(req, res, next) {
  res.json(
    req.body
)});

module.exports = router;