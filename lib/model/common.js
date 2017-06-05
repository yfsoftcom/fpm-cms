
module.exports = function(fpmClient, self){
  return {
    query: async function(collection, pager, sort, search){
      console.log(arguments);
      var q = new self.api.Query(collection);
      q.page(pager.page, pager.limit);
      q.sort(sort);
      //TODO search
      var data = await q.findAndCount();
      return data;
    },
    create: null,
    save: null,
    get: null,
  }
} 