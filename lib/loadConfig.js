var yaml = require('js-yaml');
var fs = require('fs');

module.exports = function(){
  var configFile = this.get('config_file');
  var doc = yaml.safeLoad(fs.readFileSync(configFile, 'utf8'));
  this.set('config', doc);
};