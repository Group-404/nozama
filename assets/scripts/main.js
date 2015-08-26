'use strict';

var server = '//localhost:3000';
// var server = '[production server name goes here]';

//////////////////////////////////////////////
// BEGIN: document.ready
//////////////////////////////////////////////

$(document).ready(function() {

  // WAT
  window.Main = window.Main || {};

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

  function classShowClickHandler1(event) {
    console.log("show click");
    event.preventDefault();
    $('#showpage').show();
    $('#carousel').hide();
    $('#bikepage').hide();
    $('#accessoriespage').hide();
    $('#registerpage').hide();
    $('#loginpage').hide();
    $('#cartpage').hide();
  }

  // WAT
  window.Main.classShowClickHandler1 = classShowClickHandler1;

  $('.show').on('click', classShowClickHandler1);

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
    get_bicycles();
  });

  $('.accessories').on('click', function() {
    console.log ('accessories button');
    var products = data.products;
    var accessories = $.grep(products, function(e) { return e.category !== 'bicycles';
    });
    $('#accessoryResults').html(View.accessoryIndexHTML({accessories: accessories}));
  });

  // WAT
  function classShowClickHandler2(event) {
    console.log('show cliked, data is:  ' + data.products);
    var products = data.products;
    console.log(data.products);

    var id = $(event.target).data('id');

    var product = $.grep(products, function(e) {
      return e.id === id;
    });

    $('#productResults').html(View.itemShowHTML({product: product}));
  }

  // WAT
  window.Main.classShowClickHandler2 = classShowClickHandler2;

  $('.show').on('click', classShowClickHandler2);

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
