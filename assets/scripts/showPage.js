'use strict';

var showPage = (function(){
  return {
    landingPage: function(){
      $('#carousel').show();
      $('#bikepage').hide();
      $('#accessoriespage').hide();
      $('#showPage').hide();
      $('#registerpage').hide();
      $('#loginpage').hide();
      $('#cartpage').hide();
      $('#account').hide();
      $('#thankspage').hide();
    },
    bikePage: function(){
      event.preventDefault();
      $('#bikepage').show();
      $('#carousel').hide();
      $('#accessoriespage').hide();
      $('#showPage').hide();
      $('#registerpage').hide();
      $('#loginpage').hide();
      $('#cartpage').hide();
      $('#account').hide();
      $('#thankspage').hide();
    },
    accessoriesPage: function(){
      event.preventDefault();
      $('#accessoriespage').show();
      $('#carousel').hide();
      $('#bikepage').hide();
      $('#showPage').hide();
      $('#registerpage').hide();
      $('#loginpage').hide();
      $('#cartpage').hide();
      $('#account').hide();
      $('#thankspage').hide();
    },
    registerPage: function(){
      event.preventDefault();
      $('#registerpage').show();
      $('#carousel').hide();
      $('#bikepage').hide();
      $('#accessoriespage').hide();
      $('#showPage').hide();
      $('#loginpage').hide();
      $('#cartpage').hide();
      $('#account').hide();
      $('#thankspage').hide();
    },
    loginPage: function(){
      event.preventDefault();
      $('#loginpage').show();
      $('#carousel').hide();
      $('#bikepage').hide();
      $('#accessoriespage').hide();
      $('#showPage').hide();
      $('#registerpage').hide();
      $('#cartpage').hide();
      $('#account').hide();
      $('#thankspage').hide();
    },
    cartPage: function(){
      event.preventDefault();
      $('#cartpage').show();
      $('#carousel').hide();
      $('#bikepage').hide();
      $('#accessoriespage').hide();
      $('#showPage').hide();
      $('#registerpage').hide();
      $('#loginpage').hide();
      $('#account').hide();
      $('#thankspage').hide();
    },
    accountPage: function(){
      event.preventDefault();
      $('#account').show();
      $('#cartpage').hide();
      $('#carousel').hide();
      $('#bikepage').hide();
      $('#accessoriespage').hide();
      $('#showPage').hide();
      $('#registerpage').hide();
      $('#loginpage').hide();
      $('#thankspage').hide();
    },
    thanksPage: function(){
      event.preventDefault();
      $('#thankspage').show();
      $('#cartpage').hide();
      $('#carousel').hide();
      $('#bikepage').hide();
      $('#accessoriespage').hide();
      $('#showpage').hide();
      $('#registerpage').hide();
      $('#loginpage').hide();
      $('#account').hide();
    }
  };
})();
