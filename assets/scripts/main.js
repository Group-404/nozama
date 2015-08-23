'use strict';

var server = '//localhost:3000';
// var server = '[place production server here]';

//////////////////////////////////////////////
// BEGIN: document.ready
//////////////////////////////////////////////

$(document).ready(function() {

  $('#carousel').carousel();

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

});

//////////////////////////////////////////////
// END: document.ready
//////////////////////////////////////////////
