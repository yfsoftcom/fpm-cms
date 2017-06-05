var _ = require('lodash');

module.exports = {
  sortBy: function(arr, sortBy){
    return arr.sort(function(a, b){
      var valA = a[sortBy.col];
      var valB = b[sortBy.col];
      if(typeof valA === 'string'){
        valA = valA.charCodeAt();
        valB = valB.charCodeAt();
      }
      return (valA - valB) * ('asc' === sortBy.dir ? 1 : -1);
    });
  }
}