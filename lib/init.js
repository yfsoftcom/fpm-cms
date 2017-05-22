module.exports = function(options){
  for(var k in options){
    this.set(k, options[k]);
  }
};