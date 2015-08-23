'use strict';

// fake database. delete when connect to back-end.
var data = { products: [
  {id: 1, name: "specialized roadbike", category: "bike", price: 400},
  {id: 2, name: "schwinn mountainbike", category: "bike", price: 550, sale: 499},
  {id: 3, name: "schwinn helmet", category: "accessory", price: 30},
  {id: 4, name: "bike gloves", category: "accessory", price: 25, sale: 19}
]};

$(document).ready(function(){

  // on document ready, show all products
  $("#products").html(View.productIndexHTML({products: data.products}));

  // when click button show-bikes, show only bikes
  $("#show-bikes").on('click', function(){

  });

  // when click button accessories, show only accessories
  $("#show-accessories").on('click', function(){

  });

});
