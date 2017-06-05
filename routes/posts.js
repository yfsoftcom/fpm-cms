var util = require('../utils');

module.exports = function(router, self){
  
  router.post('/api/posts', async function(ctx, next){
    
    var data = {
      count: 10,
      rows: [
        { id: 1, name: 'tester2', state: 'Edit', author: 'Admin', publishAt: 1444244513 },
        { id: 2, name: 'fdasf', state: 'Edit', author: 'Admin', publishAt: 1444244513 },
        { id: 3, name: 'ghdasgh', state: 'Edit', author: 'Admin', publishAt: 1444244513 },
        { id: 4, name: 'hashfa', state: 'Edit', author: 'Admin', publishAt: 1444244513 },
      ]} ;
    ctx.data = data;
  })
}