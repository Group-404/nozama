'use strict';
// Fake database. Delete when we connect to back-end.
var data = { products: [
  {id: 1, category: 'bicycles', name: 'Breezer Downtown 5 Bike', description: 'The Breezer Downtown 5 Bike is the ideal ride for your urban adventures around town, whether it be a long expedition or a simple ride to work.', price: 569, imageURL: 'bike_breezer_lg.jpg', thumbnailURL: 'bike_breezer_sm.jpg'},
  {id: 2, category: 'bicycles', name: 'Schwinn City 3 Bike 2013 - Womens', description: 'In a classic design with modern lightweight performance, the Schwinn City 3 Bike for women lets you get around town easily and look good doing it.', price: 550, sale: 269.95, imageURL: 'bike_schwinn_lg.jpg', thumbnailURL: 'bike_schwinn_sm.jpg'},
  {id: 3, category: 'helmets', name: 'Giro Reverb Helmet', model: 'matte gray', price: 55, imageURL: 'helmet_shadow_lg.jpg', thumbnailURL: 'helmet_shadow_sm.jpg'},
  {id: 4, category: 'helmets', name: 'Giro Reverb Helmet', model: 'Highlight Yellow', price: 55, imageURL: 'helmet_yellow_lg.jpg', thumbnailURL: 'helmet_yellow_sm.jpg'},
  {id: 5, category: 'helmets', name: 'Giro Reverb Helmet', model: 'Matte White CA Beary', price: 55, imageURL: 'helmet_white_lg.jpg', thumbnailURL: 'helmet_white_sm.jpg'},
  {id: 6, category: 'helmets', name: 'Giro Reverb Helmet', model: 'Vintage Red', price: 55, imageURL: 'helmet_red_lg.jpg', thumbnailURL: 'helmet_red_sm.jpg'},
  {id: 7, category: 'locks', name: 'Kryptonite Keeper 12 Standard',  price: 35, sale: 30, imageURL: 'lock_keeper_lg.jpg', thumbnailURL: 'lock_keeper_sm.jpg'},
  {id: 8, category: 'locks', name: 'Kryptonite Series 2 Mini Ulock - Red',  price: 35, imageURL: 'lock_red_lg.jpg', thumbnailURL: 'lock_red_sm.jpg'},
  {id: 9, category: 'locks', name: 'Kryptonite Series 2 Mini Ulock - White',  price: 35, imageURL: 'lock_white_lg.jpg', thumbnailURL: 'lock_white_sm.jpg'},
  {id: 10, category: 'locks', name: 'Kryptonite Series 2 Mini Ulock - Black',  price: 35, imageURL: 'lock_black_lg.jpg', thumbnailURL: 'lock_black_sm.jpg'},
]};

var server = '//localhost:3000';
// var server = '[place production server here]';

//////////////////////////////////////////////
// BEGIN: document.ready
//////////////////////////////////////////////

$(document).ready(function() {

  // invokes carousel
  $('#carousel').carousel();

  // initial state of landing page
  $('#carousel').show();
  $('#bikepage').hide();
  $('#accessoriespage').hide();
  $('#showpage').hide();
  $('#registerpage').hide();
  $('#loginpage').hide();

  //////////////////////////////////////////////
  // BEGIN: show appropriate page; hide the rest
  //////////////////////////////////////////////

  $('#logo').on('click', function(event) {
    event.preventDefault();
    $('#carousel').show();
    $('#bikepage').hide();
    $('#accessoriespage').hide();
    $('#showpage').hide();
    $('#registerpage').hide();
    $('#loginpage').hide();
    $('#cartpage').hide();
  });

  $('.bicycles').on('click', function(event) {
    event.preventDefault();
    $('#bikepage').show();
    $('#carousel').hide();
    $('#accessoriespage').hide();
    $('#showpage').hide();
    $('#registerpage').hide();
    $('#loginpage').hide();
    $('#cartpage').hide();
  });

  $('.accessories').on('click', function(event) {
    event.preventDefault();
    $('#accessoriespage').show();
    $('#carousel').hide();
    $('#bikepage').hide();
    $('#showpage').hide();
    $('#registerpage').hide();
    $('#loginpage').hide();
    $('#cartpage').hide();
  });

  $('.show').on('click', function(event) {
    event.preventDefault();
    $('#showpage').show();
    $('#carousel').hide();
    $('#bikepage').hide();
    $('#accessoriespage').hide();
    $('#registerpage').hide();
    $('#loginpage').hide();
    $('#cartpage').hide();
  });

  $('.register').on('click', function(event) {
    event.preventDefault();
    $('#registerpage').show();
    $('#carousel').hide();
    $('#bikepage').hide();
    $('#accessoriespage').hide();
    $('#showpage').hide();
    $('#loginpage').hide();
    $('#cartpage').hide();
  });

  $('.login').on('click', function(event) {
    event.preventDefault();
    $('#loginpage').show();
    $('#carousel').hide();
    $('#bikepage').hide();
    $('#accessoriespage').hide();
    $('#showpage').hide();
    $('#registerpage').hide();
    $('#cartpage').hide();
  });

  $('.cart').on('click', function(event) {
    event.preventDefault();
    $('#cartpage').show();
    $('#carousel').hide();
    $('#bikepage').hide();
    $('#accessoriespage').hide();
    $('#showpage').hide();
    $('#registerpage').hide();
    $('#loginpage').hide();
  });

  //////////////////////////////////////////////
  // END: show appropriate page, hide the rest
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  // BEGIN: prepare all handlebars objects
  //////////////////////////////////////////////

  $('.bicycles').on('click', function() {
    var products = data.products;
    var bicycles = $.grep(products, function(e) { return e.category === 'bicycles';
    });
    $('#bicycleResults').html(View.bicycleIndexHTML({bicycles: bicycles}));
  });

  //
  // $("#products").html(View.productIndexHTML({products: bikes}));
  // });

  //////////////////////////////////////////////
  // END: prepare all handlebars objects
  //////////////////////////////////////////////

});

//////////////////////////////////////////////
// END: document.ready
//////////////////////////////////////////////
