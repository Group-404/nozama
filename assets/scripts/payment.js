var Payment = (function(){

  // Configures Stripe Checkout
  // var _handler = StripeCheckout.configure({
  //   key: 'pk_test_2saYaU7cKBb0eV7JGudVl4Jo',
  //   image: 'https://nozama.s3-us-west-2.amazonaws.com/penny-farthing.png',
  //   locale: 'auto',
  //   token: function(token) {
  //     // Use the token to create the charge with a server-side script.
  //     // You can access the token ID with `token.id`
  //   }
  // });

  var _responseHandler = function(status, response) {
    var $form = $('#payment-form');

    //manipulates cart from simpleStorage into cartArray
    var cart = simpleStorage.get('cart');
    var cartArray = [];
    Object.keys(cart).forEach(function(cVal) {
      var product = {
        ProductId : cVal,
        quantity : cart[cVal].quantity
      };
      cartArray.push(product);
    });

    if (response.error) {
      // Show the errors on the form
      $form.find('.payment-errors').text(response.error.message);
      $form.find('button').prop('disabled', false);
    } else {
      // response contains id and card, which contains additional card details
      var token = response.id;
      // Insert the token into the form so it gets submitted to the server
      // $form.append($('<input type="hidden" name="stripeToken" />').val(token));
      MyApi.createPayment(token, cartArray);
      // and submit
      // $form.get(0).submit();
    }
  };

  return {
    responseHandler : _responseHandler
  }

})();
