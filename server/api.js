var express = require('express');
var router = express.Router();
var Book = require('../models/Book.js');

router.get('/', function (req, res) {
  Book.find(function (err, dbBooks) {
    res.json(dbBooks);
  });
});

module.exports = router;
