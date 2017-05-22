const Koa = require('koa');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const path = require('path');

module.exports = function(){
  var app = new Koa();
  // middlewares
  app.use(bodyparser);
  app.use(json());
  app.use(logger());
  app.use(require('koa-static')(path.join(__dirname , '../public')));
  app.use(require('koa-static')(path.join(__dirname , '../admin/public')));
  //attach http server ;

  app.use(views(path.join(__dirname, '../admin/views'), {
    extension: 'html',
    map: { html: 'nunjucks' }
  }));
  
  this.set('app', app);
};