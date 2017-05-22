var _ = require('lodash');

// FastCms Class Define
var FastCms = function(){
  this._app = null;    // mvc web server
  this._options = {
    name: 'FastCms',
    brand: 'YunPlus.IO',
  }; 
  this.set('server', {
    port: 8081,
    address: '0.0.0.0',
    dev: 'DEV',
  });

  this.set('growingio', { });

};

FastCms.prototype.get = FastCms.prototype.set = require('./lib/define.js');
FastCms.prototype.init = require('./lib/init.js');
FastCms.prototype.start = require('./lib/start.js');
FastCms.prototype.initFpmClient = require('./lib/initFpmClient.js');
FastCms.prototype.initAppServer = require('./lib/initAppServer.js');

var _cms = module.exports = new FastCms();