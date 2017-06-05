
module.exports = function(){
  //TODO: inject some plugin hook
  var config = this.get('config');

  return config.admin.nav;
}