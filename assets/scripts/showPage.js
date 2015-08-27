'use strict';

var showPage = (function(){
  return {
    landingPage: function(){
      $('#carousel').show();
      $('#bikepage').hide();
      $('#accessoriespage').hide();
      $('#showpage').hide();
      $('#registerpage').hide();
      $('#loginpage').hide();
    },
    bikePage: function(){
      event.preventDefault();
      $('#bikepage').show();
      $('#carousel').hide();
      $('#accessoriespage').hide();
      $('#showpage').hide();
      $('#registerpage').hide();
      $('#loginpage').hide();
      $('#cartpage').hide();
    },
    accessoriesPage: function(){
      event.preventDefault();
      $('#accessoriespage').show();
      $('#carousel').hide();
      $('#bikepage').hide();
      $('#showpage').hide();
      $('#registerpage').hide();
      $('#loginpage').hide();
      $('#cartpage').hide();
    },
    registerPage: function(){
      event.preventDefault();
      $('#registerpage').show();
      $('#carousel').hide();
      $('#bikepage').hide();
      $('#accessoriespage').hide();
      $('#showpage').hide();
      $('#loginpage').hide();
      $('#cartpage').hide();
    },
    loginPage: function(){
      event.preventDefault();
      $('#loginpage').show();
      $('#carousel').hide();
      $('#bikepage').hide();
      $('#accessoriespage').hide();
      $('#showpage').hide();
      $('#registerpage').hide();
      $('#cartpage').hide();
    },
    cartPage: function(){
      event.preventDefault();
      $('#cartpage').show();
      $('#carousel').hide();
      $('#bikepage').hide();
      $('#accessoriespage').hide();
      $('#showpage').hide();
      $('#registerpage').hide();
      $('#loginpage').hide();
    }
  }
})();
