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

  // Stripe Checkout
  // $('#create-charge').on('click', function(e) {
  //   // Open Checkout with further options
  //   Stripe.handler.open({
  //     name: 'Nozama',
  //     description: 'bike (1), helmet (1)', // get from cart
  //     amount: 2000 // get from cart
  //   });
  //   e.preventDefault();
  // });

  // // Close Checkout on page navigation
  // $(window).on('popstate', function() {
  //   Stripe.handler.close();
  // });

  Stripe.setPublishableKey('pk_test_2saYaU7cKBb0eV7JGudVl4Jo');
  $('#payment-form').submit(function(event) {
    var $form = $(this);

    // Disable the submit button to prevent repeated clicks
    $form.find('button').prop('disabled', true);

    Stripe.card.createToken($form, Payment.responseHandler);
    console.log("token created successfully");

    // Prevent the form from submitting with the default action
    return false;
  });

});
