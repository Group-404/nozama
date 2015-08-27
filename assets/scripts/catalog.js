var Catalog = (function(){

  var catalog = {};
  catalog.products = [];

  catalog.seedCatalog = function(){
    var self = this;
    $.ajax({
      url: 'http://localhost:3000/products'
    }).then(function(products){
      self.products = products;
    });
  };

  return catalog;

})();
