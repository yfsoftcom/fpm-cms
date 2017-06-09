function View(ctx, req, res){
  this._ctx = ctx;
  this._req = req;
  this._res = res;

};

View.prototype.render = async function(path, locals){
  return await this._ctx.render(path, locals)
};

View.prototype.renderFront = async function(path, locals){
  return await this._ctx.render(path, locals)
};

module.exports = View;