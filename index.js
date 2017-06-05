var _ = require('lodash');

// FastCms Class Define
var FastCms = function(){
  this._app = null;    // mvc web server
  this._options = {
    name: 'FastCms',
    brand: 'YunPlus.IO',
    config: {},
    config_file: 'config.yaml',
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
FastCms.prototype.loadConfig = require('./lib/loadConfig.js');
FastCms.prototype.start = require('./lib/start.js');
FastCms.prototype.createRouter = require('./lib/createRouter.js');
FastCms.prototype.initModel = require('./lib/model').init;
FastCms.prototype.initRouter = require('./lib/initRouter.js');
FastCms.prototype.initAppServer = require('./lib/initAppServer.js');
FastCms.prototype.session = require('./lib/session.js');
FastCms.prototype.initNav = require('./lib/initNav.js');

var _cms = module.exports = new FastCms();
