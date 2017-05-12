angular
  .module('notesApp', ['ngMaterial', 'ngTextareaEnter', 'ngAnimate'])
  .controller('appCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.activeIndex = (localStorage.getItem('items')!==null) ? 0 : 1;
    $scope.saved = localStorage.getItem('items');
    $scope.items = (localStorage.getItem('items')!==null) ? JSON.parse($scope.saved) : [
      {
        title: 'First item with custom name',
        comments: [
          'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popu- larized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
          'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popu- larized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
        ]
      },
      {
        title: 'Second item is active',
        comments: [
          'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popu- larized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
          'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popu- larized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
          'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popu- larized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA varia- tion of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popular- ized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA varia- tion of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popular- ized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
        ]
      }
    ];
	  localStorage.setItem('items', JSON.stringify($scope.items));

    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID).toggle()
      }, 200);
    }

    $scope.close = function () {
      $mdSidenav('left').close()
    };

    $scope.chooseItem = function (index) {
      $scope.activeIndex = index;
    };

    $scope.addComment = function (newComment) {
      $scope.items[$scope.activeIndex].comments.push(newComment);
      $scope.itemComment = '';
      localStorage.setItem('items', JSON.stringify($scope.items));
    };

    $scope.addItem = function (newItem) {
      $scope.items.push({title: newItem, comments: []});
      $scope.itemTitle = '';
      $scope.activeIndex = $scope.items.length - 1;
      localStorage.setItem('items', JSON.stringify($scope.items));
    };

    $scope.removeItem = function (index) {
      if($scope.activeIndex == $scope.items.length - 1) {
        $scope.activeIndex = $scope.items.length - 2;
      }
      $scope.items.splice(index, 1);
      localStorage.setItem('items', JSON.stringify($scope.items));
    };
  })
