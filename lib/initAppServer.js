const Koa = require('koa');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const session = require('koa-session2');
const logger = require('koa-logger');
const path = require('path');

var adminSession = require('./middleware/session.js');
var adminError = require('./middleware/error.js');
var adminApi = require('./middleware/api.js');

module.exports = function(){
  var app = new Koa();
  // middlewares
  app.use(bodyparser);
  app.use(json());
  app.use(logger());
  app.use(require('koa-static')(path.join(__dirname , '../public')));
  //attach http server ;

  app.use(views(path.join(__dirname, '../views'), {
    extension: 'html',
    map: { html: 'nunjucks' }
  }));
  app.use(session({
    key: "SESSIONID",   //default "koa:sess"
  }));

  //login filter
  app.use(adminSession);
  // 404
  app.use(adminError);
  // api
  app.use(adminApi);
  this.app = app;
  this.set('app', app);
};