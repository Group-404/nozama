var Stripe = (function(){

  // Remember to replace the test data-key with your live key in production
  var _handler = StripeCheckout.configure({
    key: 'pk_test_2saYaU7cKBb0eV7JGudVl4Jo',
    image: '/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`
    }
  });

  return {
    handler : _handler
  }

})();
