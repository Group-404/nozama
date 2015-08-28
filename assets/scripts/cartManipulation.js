'use strict';

window.CartManipulation = (function() {
  var getCart = function() {
    simpleStorage.get('cart');
  }
  var remove = function(id) {
    getCart();
    delete cart[ProductId];
    saveCart();
  };
  var reduce = function(id, newQty) {
    getCart();
    cart[id].quantity = newQty;
    saveCart();
  };
  var saveCart = function() {
    simpleStorage.set('cart', cart);
  };

  return {
    'delete' : remove,
    setQty : reduce
  };
})();
