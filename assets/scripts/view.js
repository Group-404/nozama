'use strict';

var View = (function(){
  ////////// HANDLEBARS //////////////

  // make helper for dividing by category -- see ifvalue example in matt's repo

  //// Top-Level Handlebars Template
  var _bicycleIndex = Handlebars.compile($('#bicycle-template').html());
  var _accessoryIndex = Handlebars.compile($('#accessory-template').html());
  var _itemShow = Handlebars.compile($('#show-template').html());

  return {
    bicycleIndexHTML : _bicycleIndex,
    accessoryIndexHTML : _accessoryIndex,
    itemShowHTML : _itemShow
  };
})();
