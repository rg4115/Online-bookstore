var express = require('express');
var router = express.Router();

/* GET users listinging. */
router.get('/', function(req, res, next) {
  res.send('respond with a resources');
});

module.exports = router;
