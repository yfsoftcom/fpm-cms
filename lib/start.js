var http = require('http');
module.exports = function(){
  this.initAppServer();
  var app = this.get('app');
  var serverOptions = this.get('server');
  var server = http.createServer(app.callback());
  server.listen(serverOptions.port);
};