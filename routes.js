var api = require('./handlers/api.js');

module.exports = function(app){
  //Routes for the API data
  app.get('/', api.main);
  app.get('/:query', api.query);
}
