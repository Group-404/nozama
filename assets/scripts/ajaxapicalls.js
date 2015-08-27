'use strict';

var sa = 'http://localhost:3000';

var MyApi = (function(stripeToken){
  return {
    register: function(){
      $.ajax(server + '/signup', {
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify({
          email: $('#emailRegister').val(),
          password: $('#passwordRegister').val()
        }),
        dataType: 'json',
        method: 'POST'
      }).done(function(data, textStatus, jqxhr){
        // $('#result').val(JSON.stringify(data));
        console.log(data);
      }).fail(function(jqxhr, textStatus, errorThrown){
        // $('#result').val('registration failed');
        console.error(jqxhr.responseText);
      });
    },
    login: function(){
      $.ajax(server + '/login', {
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify({
          email: $('#emailLogin').val(),
          password: $('#passwordLogin').val()
        }),
        xhrFields: {
          withCredentials: true
        },
        // dataType: 'json',
        method: 'POST'
      }).done(function(data, textStatus, jqxhr){
        console.log(data);
        $('.myaccount, .logout').show();
        $('.register, .login').hide();
        showPage.landingPage();
        // simplestorage
      }).fail(function(jqxhr, textStatus, errorThrown){
        // $('#login-alert').removeClass('hide');
        console.error(jqxhr.responseText);
      });

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

    },
    logout: function() {
      $.ajax(server + '/logout', {
        contentType: 'application/json',
        processData: false
      }).done(function(data, textStatus, jqxhr) {
        $('.logout, .myaccount').hide(); // show logout button
        $('.login, register').show(); // hide login button
        console.log(data);
      }).fail(function(jqxhr, textStatus, errorThrown) {
        console.error(jqxhr.responseText);
      });
    },
    displayAccountInfo: function() {
      $.ajax(server + '/displayAccount', {
        xhrFields: {
          withCredentials: true
        },
        method: "GET"
      }).done(function(data) {
        console.log(data);
        showPage.accountPage();
        var templatingFunction = Handlebars.compile($('#display-account-template').html());
        var html = templatingFunction(data);
        $('#display-account').html(html);
        $('[name=acct-state]').val(data.profile.state);
      }).fail(function(jqxhr, textStatus, errorThrown) {
        console.error(jqxhr.responseText);
      });
    },
    saveAccountInfo: function() {
          // var profile = {
          //         moniker: $('#acct-moniker').val(),
          //         location: $('#acct-location').val(),
          //         email_or_phone: $("input[name='acct-phone-or-email']:checked").val(),
          //         phone_number: $('#acct-phone-field').val(),
          //         opted_in: findOptInSelection(),
          //         };
      $.ajax({
        url: server + '/updateAccount',
        xhrFields: {
          withCredentials: true
        },
        contentType: 'application/json',
        method: 'PATCH',
        data: JSON.stringify({
          user: {
            email: $('#acct-email').val()
          },
          profile: {
            phoneNumber: $('#acct-phone').val(),
            lastName: $('#acct-lastname').val(),
            firstName: $('#acct-firstname').val(),
            addressOne: $('#acct-addressone').val(),
            addressTwo: $('#acct-addresstwo').val(),
            city: $('#acct-city').val(),
            state: $('[name=acct-state]').val(),
            zipCode: $('#acct-zip').val(),
          } //,
          // profile: {

          // }
        }),

      }).done(function(data) {
        console.log(data);
      }).fail(function(jqxhr, textStatus, errorThrown) {
        console.error(jqxhr.responseText);
      });
    },
    getOrders: function() {
      $.ajax(server + '/orders', {
        xhrFields: {
          withCredentials: true
        }
      }).done(function(data) {
        // console.log(data);
        data.orders.forEach(function(order){
          Order.newOrder(order);
        });
        console.log(Order.orders);
        // var templatingFunction = Handlebars.compile($('#display-account-template').html());
        // var html = templatingFunction({account: data});
      }).fail(function(jqxhr, textStatus, errorThrown) {
        console.error(jqxhr.responseText);
      });
    }
  }
})();
