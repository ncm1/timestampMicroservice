
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next){
    res.render('index', {title: "Timestamp microservice"});
});

router.get('/:query', function(req, res, next){
  if(req.params.query){
    var query = req.params.query;
    res.send(query);
  }
})

module.exports = router;
