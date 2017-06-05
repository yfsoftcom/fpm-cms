module.exports = async (ctx, next) => {
  let path = ctx.request.url
  if (path === '/admin'
    || path === '/admin/login'
    || path.indexOf('/admin/api') === 0
    || path === '/admin/404') {
    await next()
  } else {
    let user = ctx.session.__admin__;
    if (!user) {
      ctx.redirect('/admin/login')
    } else {
      await next()
    }
  }
}