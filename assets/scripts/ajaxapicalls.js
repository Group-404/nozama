'use strict';

var register = function() {
  // This will be filled in eventually
};

var login = function() {
  // This will be filled in eventually
};

var get_bicycles = function() {
  $.ajax({
    url: server + '/products/',
    method: 'GET'
  }).done(function(response){
    console.log('products = ' + response);
    var bicycles = $.grep(response, function(e) { return e.category === 'bicycles'; });
    $('#bicycleResults').html(View.bicycleIndexHTML({bicycles: bicycles}));
    $('.show').on('click', Main.classShowClickHandler1); // WAT
    $('.show').on('click', Main.classShowClickHandler2); // WAT
  }).fail(function(error){
    console.log(error);
  });
};
