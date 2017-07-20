
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:string', function(req, res, next){
  req.params.string = req.params.string.replace(/ /g, '%20');
  var query = null;
  query = req.params.string;

  res.send(query);
})

module.exports = router;
