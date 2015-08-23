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

  //////////////////////////////////////////////
  // BEGIN: show appropriate page; hide the rest
  //////////////////////////////////////////////

   $('#logo').on('click', function(event) {
    event.preventDefault();
    $('#carousel').show();
    $('#bikepage').hide();
    $('#accessoriespage').hide();
  });

  $('.bicycles').on('click', function(event) {
    event.preventDefault();
    $('#bikepage').show();
    $('#carousel').hide();
    $('#accessoriespage').hide();
  });

  $('.accessories').on('click', function(event) {
    event.preventDefault();
    $('#carousel').hide();
    $('#bikepage').hide();
    $('#accessoriespage').show();
  });

  //////////////////////////////////////////////
  // END: show appropriate page, hide the rest
  //////////////////////////////////////////////

});

//////////////////////////////////////////////
// END: document.ready
//////////////////////////////////////////////
