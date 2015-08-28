'use strict';

var View = (function(){
  ////////// HANDLEBARS //////////////

  // make helper for dividing by category -- see ifvalue example in matt's repo

  //// Top-Level Handlebars Template
  var _bicycleIndex = Handlebars.compile($('#bicycle-template').html());
  // var _accessoryIndex = Handlebars.compile($('#accessory-template').html());
  var _itemShow = Handlebars.compile($('#show-template').html());
  var _accountShow = Handlebars.compile($('#display-account-template').html());

  Handlebars.registerHelper('formatDate', function(timestamp) {
    return new Date(timestamp).toString('yyyy-MM-dd')
  });

  var _ordersShow = Handlebars.compile($('#order-history-template').html());
  var _ordersProductsShow = Handlebars.compile($('#order-history-product-template').html());

  return {
    bicycleIndexHTML : _bicycleIndex,
    // accessoryIndexHTML : _accessoryIndex,
    itemShowHTML : _itemShow,
    accountShowHTML : _accountShow,
    ordersShowHTML : _ordersShow,
    ordersProductsShowHTML : _ordersProductsShow
  };
})();
