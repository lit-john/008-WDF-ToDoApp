(function() {

    var todoController = function ($scope, $log, $window, todoFactory) {

        function init() {
          $scope.appName = todoFactory.getAppName().name;
          $scope.todos = todoFactory.getToDos();
        }

        init();

        $scope.addToDo = function() {
          if ($scope.newTodo && $scope.newTodo.name && $scope.newTodo.dueDate) {

            $scope.newTodo.name = $scope.newTodo.name.trim()

            if ($scope.newTodo.name.length != 0)
            {
              $log.log("addToDo function called " + $scope.newTodo.name + " - " + $scope.newTodo.dueDate);

              var latestTodoList = todoFactory.addToDo($scope.newTodo);

              $scope.newTodo = null;

              $scope.todos = latestTodoList;
            }
          }

        };

        $scope.deleteToDo = function(id) {
          $log.log("Deleting " + id);
        };


    };

    todoController.$inject = ['$scope', '$log', '$window', 'todoFactory'];

    angular.module('todoApp').controller('todoController', todoController);

}());
