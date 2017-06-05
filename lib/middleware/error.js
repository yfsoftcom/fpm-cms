module.exports = async function (ctx, next) {
  // console.log(ctx.response);
  // if(ctx.response.status === 404){
  //   ctx.status = 200;
  //   await ctx.render('admin/404');
  // }else{
  //   await next();
  // }
  try {
    await next();
    if (ctx.response.status === 404) {
      await ctx.redirect('/admin/404');
    }
  } catch (e) {
    console.log(e);
  }
}