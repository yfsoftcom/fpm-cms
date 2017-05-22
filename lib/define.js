module.exports = function(k, v){
  if(arguments.length === 1){
    return this._options[k];
  }
  this._options[k] = v;
}