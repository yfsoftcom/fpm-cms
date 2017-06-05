module.exports = function(){
  var self = this;

  this.session = {
    login: async function(loginInfo, ctx){
      var auth = self.get('config').admin.auth;
      if(auth.username !== loginInfo.username){
        throw new Error('Username Error');
      }
      if(auth.password !== loginInfo.password){
        throw new Error('Password Error');
      }
      var user = { id: 1, nickname: '管理员'};
      ctx.session.__admin__ = user;
      return user;
    }
  }
}