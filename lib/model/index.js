var YF = require('yf-fpm-client-nodejs').default;
var _ = require('lodash');

var model = {
  init: function(options){
    this.model = model;
    var fpmConfig = this.get('config').fpm;
    YF.init(fpmConfig);
    this.api = YF;
    model.user = require('./user.js')(null, this);
    model.common = require('./common.js')(null, this);
  }
};

module.exports = model;