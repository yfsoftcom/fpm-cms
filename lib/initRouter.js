var routers = require('../routes');

module.exports = function(){
  var router = this.createRouter();
  routers(router, this);

  this.get('app').use(router.routes(), router.allowedMethods());
};