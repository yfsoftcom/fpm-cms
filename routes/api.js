var users = require('./users.js');
var posts = require('./posts.js');
var pages = require('./pages.js');

module.exports = function(router, self){
  users(router, self);
  posts(router, self);
  pages(router, self);
}
