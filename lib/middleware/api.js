module.exports = async (ctx, next) => {
  let path = ctx.request.url;
  if(path.indexOf('/api') === 0){
    var tableInfo = ctx.request.body;
    var columns = tableInfo.columns;
    var order = tableInfo.order[0];    
    var search = tableInfo.search;
    var length = parseInt(tableInfo.length);
    var start = parseInt(tableInfo.start);
    order.column = columns[parseInt(order.column)];
    ctx.api = {
      draw: tableInfo.draw,
      order: (order.column.data || 'id') + (order.dir === 'asc' ? '+' : '-'),
      pager: { limit: length, page: start/length + 1 },
      search: search,
    };
    await next();
    ctx.body = {
      draw: ctx.api.draw,
      recordsTotal: ctx.data.count,
      recordsFiltered: ctx.data.count,
      data: ctx.data.rows,
    };

    return;
  }

  await next();
  
}