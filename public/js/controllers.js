'use strict';

angular.module('myApp')

.controller('mainController', function() {
  console.log('mainController!!');
})

.controller('createController', function($scope, $http, Item) {

  $scope.addNewItem = (newItem) => {
    $http.post('/items', newItem)
      .then(allItems => {
        Item.allItems = allItems.data;
        $scope.newItem = '';
      });
  };
})

.controller('rUDController', function(Item, $http, $scope) {
  $scope.editMode = false;

  Item.getRooms();

  $scope.editItem = (event) => {
    console.log(event.target.dataset.id);
  }
  $scope.deleteItem = (event) => {
    let id = event.target.dataset.id;
    $http.delete(`/items/${id}`)
      .then(allItems => {
        Item.allItems = allItems.data;
        $scope.items = allItems.data;
      })
  }

  $scope.toggleEditMode = () => {
    console.log($scope.editMode);
    $scope.editMode = !$scope.editMode;
  }

  $http.get('/items')
    .then(allItems => {
      console.log(allItems)
      Item.allItems = allItems.data;
      $scope.items = allItems.data;
    })
})
