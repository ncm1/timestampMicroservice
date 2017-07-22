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

    var naturalTime;
    var unixTime;

    if(isInt(query)){
      unixTime = query;
      var holder = unixToDate(query);
      naturalTime = months(holder.getMonth()) + " " + holder.getDate() + ", "  + year(holder.getYear());
      res.send({"unix": unixTime, "natural": naturalTime})
    }
    else{
      naturalTime = query;
      unixTime    =   moment(getDate(naturalTime)).format('X');
      res.send({"unix": unixTime, "natural": naturalTime})
    }
  }
})
function months(num){
  switch(num){
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
}

function year(num){
  var numStr = String(num);
  var end = numStr.length;
  if(num >= 100)
    return "20" + numStr.substring(1,end);
  else if(num < 100 && num > 0)
    return "19" + string(num);
}

function getDate(string){
  var d = new Date(string);
  return d;
}
function unixToDate(string){
  var d = new Date(string * 1000);
  return d;
}
function isInt(value) {
  return !isNaN(value) &&
         parseInt(Number(value)) == value &&
         !isNaN(parseInt(value, 10));
}
module.exports = router;
