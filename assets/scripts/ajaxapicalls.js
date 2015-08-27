'use strict';

var sa = 'http://localhost:3000';

var MyApi = (function(stripeToken){
  return {
    register: function(){

    },
    login: function(){

    },
    getBicycles: function() {
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
    },
    showProduct: function(){

    }
  }
})();
