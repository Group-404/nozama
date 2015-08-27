var Order = (function(){

  var order = {};
  order.orders = [];

  function _createOrder(lineItems) {
    var order = {};
    order.items = [];
    lineItems.forEach(function(lineItem){
      var product = Catalog.products.filter(function(product){
        return product.id === lineItem.ProductId
      });
      lineItem.price = product[0].price;
      lineItem.name = product[0].name;
      lineItem.thumbnailURL = product[0].thumbnailURL;
      order.items.push(lineItem);
    });
    return order;
  };

  order.newOrder = function(lineItems){
    var order = _createOrder(lineItems);
    this.orders.push(order)
  };

  return order;

})();
