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
      $('#cartpage').hide();
      $('#account').hide();
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
      $('#account').hide();
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
      $('#account').hide();
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
      $('#account').hide();
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
      $('#account').hide();
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
      $('#account').hide();
    },
    accountPage: function(){
      event.preventDefault();
      $('#account').show();
      $('#cartpage').hide();
      $('#carousel').hide();
      $('#bikepage').hide();
      $('#accessoriespage').hide();
      $('#showpage').hide();
      $('#registerpage').hide();
      $('#loginpage').hide();
    }
  }
})();
