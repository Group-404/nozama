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
    var bikes = [];
    // iterate thru data.products and put all bikes into array

  $("#products").html(View.productIndexHTML({products: bikes}));
  });

  // when click button accessories, show only accessories
  $("#show-accessories").on('click', function(){

  });

  $('#create-charge').on('click', function(e) {
    // Open Checkout with further options
    Stripe.handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2000
    });
    e.preventDefault();
  });

  // Close Checkout on page navigation
  $(window).on('popstate', function() {
    Stripe.handler.close();
  });

});
