'use strict';

angular.module('myApp')

.service('Item', function() {
  this.allItems;
  this.rooms;

  this.getRooms = () => {
    console.log(this.allItems);
  }
})

// .service('', function() {}});
