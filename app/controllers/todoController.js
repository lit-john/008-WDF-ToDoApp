(function() {

    var todoController = function ($scope, $log, $window, todoFactory) {

        function init() {
          $scope.appName = todoFactory.getAppName().name;
          $scope.todos = todoFactory.getToDos();
        }

        init();

        $scope.addToDo = function() {
          $log.log("addToDo function called " + $scope.newTodo.name);


        }


    };

    todoController.$inject = ['$scope', '$log', '$window', 'todoFactory'];

    angular.module('todoApp').controller('todoController', todoController);

}());
