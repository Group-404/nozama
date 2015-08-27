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

  // $('.accessories').on('click', function(event) {
  //   event.preventDefault();
  //   $('#accessoriespage').show();
  //   $('#carousel').hide();
  //   $('#bikepage').hide();
  //   $('#showpage').hide();
  //   $('#registerpage').hide();
  //   $('#loginpage').hide();
  //   $('#cartpage').hide();
  // });

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


//   $('.accessories').on('click', function() {
//     console.log ('accessories button');
//     var products = data.products;
//     var accessories = $.grep(products, function(e) { return e.category !== 'bicycles';
//     });
//     $('#accessoryResults').html(View.accessoryIndexHTML({accessories: accessories}));
//   });
//   var cartValue = [];
//   var listSimpleStorage = simpleStorage.index();
//   // simpleStorage.set("cart", cartValue);
//   function classShowClickHandler2(event) {
//    var id = $(event.target).data('id');
//      $.ajax({
//        url: server + '/products/' + id,
//        type: 'GET',
//        dataType: 'json'
//      })
//      .done(function(product) {
//       cartValue.push({quanity:1 , item:product.id});
//        $('#content').html(View.itemShowHTML({product: product}));
//        simpleStorage.set('cart', cartValue);
//        console.log("product id is:" + product.id);
//        console.log(listSimpleStorage);

//      })
//      .fail(function() {
//        console.log("error");
//      })
//      .always(function() {
//        console.log("complete");
//      });
//   };
// $('.accessories').on('click', function() {
  //   console.log ('accessories button');
  //   var products = data.products;
  //   var accessories = $.grep(products, function(e) { return e.category !== 'bicycles';
  //   });
  //   $('#accessoryResults').html(View.accessoryIndexHTML({accessories: accessories}));
  // });

  // WAT
  var cartValue = [];
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
       console.log(product);
       list = simpleStorage.index();
          console.log(list);

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

  //////////////////////////////////////////////
  // END: prepare all handlebars objects
  //////////////////////////////////////////////

});

//////////////////////////////////////////////
// END: document.ready
//////////////////////////////////////////////
