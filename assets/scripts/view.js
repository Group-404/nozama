var View = (function(){
  ////////// HANDLEBARS //////////////

  // make helper for dividing by category -- see ifvalue example in matt's repo

  //// Top-Level Handlebars Template
  var _productIndex = Handlebars.compile($("#product-template").html());

  return {
    productIndexHTML : _productIndex
  }
})();
