'use strict';

var server = '//localhost:3000';

var Catalog = Catalog || {};
var Order = Order || {};
// var server = '[production server name goes here]';


//////////////////////////////////////////////
// BEGIN: document.ready
//////////////////////////////////////////////

$(document).ready(function() {

  Catalog.seedCatalog();

  window.Main = window.Main || {};

  // invokes carousel
  $('#carousel').carousel();

  // initial state of landing page

  showPage.landingPage();

  //////////////////////////////////////////////
  // BEGIN: page load handlers
  //////////////////////////////////////////////

  $('#logo').on('click', function(event) {
    showPage.landingPage();
  });

  $('.bicycles').on('click', function(event) {
    showPage.bikePage();
  });

  $('.accessories').on('click', function(event) {
    showPage.accessoriesPage();
  });

  $('.myaccount').hide();
  $('.logout').hide();

  //////////////////////////////////////////////
  // BEGIN: show appropriate page; hide the rest
  //////////////////////////////////////////////

  function classShowClickHandler1(event) {
    console.log("show click");
    event.preventDefault();
    $('#showpage').show();
    $('#carousel').hide();
    $('#bikepage').hide();
    $('.accessoriespage').hide();
    $('#registerpage').hide();
    $('#loginpage').hide();
    $('#cartpage').hide();
  }

  // WAT
  window.Main.classShowClickHandler1 = classShowClickHandler1;

  $('.show').on('click', classShowClickHandler1);

  $('.register').on('click', function(event) {
    showPage.registerPage();
  });

  $('.login').on('click', function(event) {
    showPage.loginPage();
  });

  $('.cart').on('click', function(event) {
    showPage.cartPage();
  });


  //////////////////////////////////////////////
  // END: page load handlers
  //////////////////////////////////////////////

  $('.bicycles').on('click', function() {
    MyApi.getBicycles();
  });

  /// CART
  var cartValue = [];
  var listSimpleStorage = simpleStorage.index();
  // simpleStorage.set("cart", cartValue);
  function classShowClickHandler2(event) {
   var id = $(event.target).data('id');
     $.ajax({
       url: server + '/products/' + id,
       type: 'GET',
       dataType: 'json'
     })
     .done(function(product) {
      cartValue.push({quanity:1 , item:product.id});
       $('#content').html(View.itemShowHTML({product: product}));
       simpleStorage.set('cart', cartValue);
       console.log("product id is:" + product.id);
       console.log(listSimpleStorage);

     })
     .fail(function() {
       console.log("error");
     })
     .always(function() {
       console.log("complete");
     });
  };


  // WAT
  window.Main.classShowClickHandler2 = classShowClickHandler2;

  $('.show').on('click', classShowClickHandler2);

  //
  // $("#products").html(View.productIndexHTML({products: bikes}));
  // });

// $('.accessories').on('click', function() {
  //   console.log ('accessories button');
  //   var products = data.products;
  //   var accessories = $.grep(products, function(e) { return e.category !== 'bicycles';
  //   });
  //   $('#accessoryResults').html(View.accessoryIndexHTML({accessories: accessories}));
  // });


  //////////////////////////////////////////////
  // END: prepare all handlebars objects
  //////////////////////////////////////////////


  // LOG IN:
  $('#login-submit').on('click', function(e){
    e.preventDefault();
    MyApi.login();
  });

  // SIGN UP:
  $('#registration-submit').on('click', function(e) {
    MyApi.register();
  });

  // LOG OUT:
  $('.logout').on('click', function() {
    MyApi.logOut();
  });

  // DISPLAY ACCOUNT INFORMATION:
  $('.myaccount').on('click', function() {
    MyApi.displayAccountInfo();
  });

  // DISPLAY ORDERS;
  $('#getOrders').on('click', function() {
    MyApi.getOrders();
  });

  // SAVE ACCOUNT INFORMATION:
  $('#acct-save').on('click', function() {
    MyApi.saveAccountInfo();
  });

  // DELETE ACCOUNT INFORMATION:
  $('#acct-delete').on('click', function() {
    MyApi.deleteAccount();
  });

});

//////////////////////////////////////////////
// END: document.ready
//////////////////////////////////////////////
