var admin = require('./admin.js');
var api = require('./api.js');
var front = require('./front.js');

module.exports = function(router, self){
  front(router, self);
  admin(router, self);
  api(router, self);
}
