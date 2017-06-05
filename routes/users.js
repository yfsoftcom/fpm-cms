var util = require('../utils');

module.exports = function(router, self){
  router.post('/api/users', async function(ctx, next){
    ctx.data = await self.model.common.query('fpm_user', ctx.api.pager, ctx.api.order);
  })
}