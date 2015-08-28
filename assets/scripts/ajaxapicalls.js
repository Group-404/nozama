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
        console.log(data);
      }).fail(function(jqxhr, textStatus, errorThrown){
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
        method: 'POST'
      }).done(function(data, textStatus, jqxhr){
        console.log(data);
        $('.myaccount, .logout').show();
        $('.register, .login').hide();
        showPage.landingPage();
      }).fail(function(jqxhr, textStatus, errorThrown){
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
        $('#bicycleResults .show').on('click', Main.classShowClickHandler1); // WAT
        $('#bicycleResults .show').on('click', Main.classShowClickHandler2); // WAT
      }).fail(function(error){
        console.log(error);
      });
    },
    showProduct: function(){

    },
    logOut: function() {
      $.ajax(server + '/logout', {
        contentType: 'application/json',
        processData: false
      }).done(function(data, textStatus, jqxhr) {
        $('.logout, .myaccount').hide();
        $('.login, register').show();
        showPage.landingPage();
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
        $('#display-account').html(View.accountShowHTML(data));
        $('[name=acct-state]').val(data.profile.state);
      }).fail(function(jqxhr, textStatus, errorThrown) {
        console.error(jqxhr.responseText);
      });
    },
    saveAccountInfo: function() {
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
          }
        }),

      }).done(function(data) {
        console.log(data);
      }).fail(function(jqxhr, textStatus, errorThrown) {
        console.error(jqxhr.responseText);
      });
    },
    deleteAccount: function() {
      $.ajax({
        url: server + '/deleteAccount',
        method: 'DELETE',
        xhrFields: {
          withCredentials: true
        },
      }).done(function(data) {
        console.log(data);
        showPage.landingPage();
        MyApi.logOut();
      }).fail(function(data) {
        console.error(data);
      });
    },
    getOrders: function(){
      $.ajax(server + '/orders', {
        xhrFields: { withCredentials: true }
      }).done(function(data){
        console.log(data);
        // data.orders.forEach(function(order){
        //   Order.newOrder(order);
        // });
      }).fail(function(){

      });
    },
    getOrderInfo: function() {
      $.ajax(server + '/orders', {
        xhrFields: {
          withCredentials: true
        }
      }).done(function(data) {
        console.log("DATA: ");
        console.log(data);
        // Build the orders on the front end
        data.orders.forEach(function(order){
          Order.newOrder(order);
        });
        console.log("ORDERS: ");
        console.log(Order.orders);


        $('#display-account').html(View.ordersShowHTML({orders: Order.orders}));
        $('#get-orders, #acct-save, #acct-delete').hide();
      }).fail(function(jqxhr, textStatus, errorThrown) {
        console.error(jqxhr.responseText);
      });
    },
    getOrderProductInfo: function(id) {
      // $.ajax(server + '/orders', {
      //   xhrFields: {
      //     withCredentials: true
      //   }
      // }).done(function(data) {

      //   console.log(id);
      //   console.log(data.orders.lineItemInfo);
      //   data.orders.lineItemInfo.forEach(function(order){
      //     console.log(order[0].orderId);
      //   }));

      //   var desiredOrder = data.orders.lineItemInfo.filter(function(order){return order[0].orderId === id;});

      //   console.log(desiredOrder);

      //   Order.newOrder(desiredOrder);

      // }).fail(function(jqxhr, textStatus, errorThrown) {
      //   console.error(jqxhr.responseText);
      // });
    }
  }
})();
