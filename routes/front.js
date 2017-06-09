var path = require('path');
module.exports = function(router, self){
  var theme = self.get('theme') || 'default';
  var themeDir = '../themes/' + theme + '/layout';
  self.app.use(require('koa-static')(self.getPath(path.join('themes', themeDir , '../assets'))));
  self.app.use(require('koa-static')(self.getPath(path.join('themes', themeDir , '../public'))));
  var render = async function(ctx, path, locals){
    await ctx.render(themeDir + path, locals);
  }

  router.get('/', async (ctx, next) => {
    await render(ctx, '/index', {
      title: 'Hello FPM!'
    })
  });
};