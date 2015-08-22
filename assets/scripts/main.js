'use strict';

var data = { products: [
  {name: "specialized roadbike", category: "bike", price: 400},
  {name: "schwinn mountainbike", category: "bike", price: 550},
  {name: "schwinn helmet", category: "accessory", price: 30},
  {name: "bike gloves", category: "accessory", price: 25}
]};

$(document).ready(function(){

$("#products").html(View.productIndexHTML({products: data.products}));

});
