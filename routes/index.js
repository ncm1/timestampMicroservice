var express = require('express');
var moment  = require('moment');
var router  = express.Router();


/* GET home page. */
router.get('/', function(req, res, next){
    res.render('index', {title: "Timestamp microservice"});
});

router.get('/:query', function(req, res, next){
  if(req.params.query){
    var query = req.params.query;
    var day = moment.unix(query);
    //res.send( day );

    var naturalTime = query;

    var unixTime =   moment(naturalTime).format('X');

    res.send({"unix": unixTime, "natural": naturalTime})
  }
})

module.exports = router;
