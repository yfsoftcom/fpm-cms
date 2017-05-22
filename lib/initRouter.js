module.exports = function(){
  var router = this.createRouter()
  router.get('/admin/ping', async (ctx, next) => {
    ctx.body = {
      now: new Date().getTime()
    }
  });
  router.get('/admin/page', async (ctx, next) => {
    await ctx.render('blank', {
      title: 'Hello FPM!'
    })
  });
  var brand = this.get('brand');
  router.get('/admin/login', async (ctx, next) => {
    await ctx.render('login', {
      title: 'Hello ' + brand,
    })
  });
  router.get('/admin/main', async (ctx, next) => {
    await ctx.render('main', {
      title: 'Hello ' + brand,
    })
  });

  this.get('app').use(router.routes(), router.allowedMethods());
};