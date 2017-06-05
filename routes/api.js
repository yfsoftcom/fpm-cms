var users = require('./users.js');
var posts = require('./posts.js');

module.exports = function(router, self){
  users(router, self);
  posts(router, self);
}