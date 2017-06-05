module.exports = function(router, self){
  router.get('/admin/ping', async (ctx, next) => {
    ctx.body = {
      now: new Date().getTime()
    }
  });
  router.get('/admin/page', async (ctx, next) => {
    await ctx.render('admin/blank', {
      title: 'Hello FPM!'
    })
  });
  var brand = self.get('brand');
  router.get('/admin/login', async (ctx, next) => {
    await ctx.render('admin/login', {
      title: 'Hello ' + brand,
    })
  });
  router.post('/admin/login', async (ctx, next) => {
    //TODO 
    var loginInfo = ctx.request.body;
    try{
      var auth = await self.session.login(loginInfo, ctx);
      if(auth){
        ctx.redirect('/admin/dashboard');
      }else{
        ctx.body = "用户名或密码错误";
      }
    }catch(e){
      ctx.body = "用户名或密码错误";
    }
    
  });
  var nav = self.initNav();

  
  router.get('/admin/dashboard', async (ctx, next) => {
    await ctx.render('admin/dashboard', {
      title: 'Hello ' + brand,
      nav : nav,
      current_path: '/admin/dashboard',
    })
  });

  router.get('/admin/users', async (ctx, next) => {
    await ctx.render('admin/users', {
      title: 'Hello ' + brand,
      nav : nav,
      current_path: '/admin/users',
    })
  });

  router.get('/admin/posts', async (ctx, next) => {
    await ctx.render('admin/posts', {
      title: 'Hello ' + brand,
      nav : nav,
      current_path: '/admin/posts',
    })
  });

  router.get('/admin/posts/new', async (ctx, next) => {
    await ctx.render('admin/post-new', {
      title: 'Hello ' + brand,
      nav : nav,
      current_path: '/admin/posts',
    })
  });

  router.post('/admin/posts/new', async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.redirect('/admin/posts');
  });


  router.get('/admin/gallery', async (ctx, next) => {
    await ctx.render('admin/gallery', {
      title: 'Hello ' + brand,
      nav : nav,
      current_path: '/admin/gallery',
    })
  });

  router.get('/admin/404', async (ctx, next) => {
    await ctx.render('admin/404', {
      title: 'Hello ' + brand,
      nav : nav,
      current_path: '/admin/404',
    })
  });
};