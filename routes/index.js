var admin = require('./admin.js');
var api = require('./api.js');

module.exports = function(router, self){
  admin(router, self);
  api(router, self);
}
