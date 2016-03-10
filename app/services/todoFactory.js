(function() {
    var todoFactory = function($http) {
        var todos = [
            {
              id: 1,
              name: "Get the milk",
              dueDate: new Date()
            },
            {
              id: 2,
              name: "Get the bread",
              dueDate: new Date()
            }
        ];

        var factory = {};

        factory.getAppName = function() {
          // In the real world we would send a http request using
          // $http to a web server that would return JSON/XML
          // contains the app name
          return {name: "ToDo App"};
        }

        factory.getToDos = function() {
          // Really I should go to the server and get the array of
          // todo object but for testing I have setup a local array
          // on the factory
          return todos;
        }


        return factory;
    };

    todoFactory.$inject = ['$http'];

    angular.module('todoApp').factory('todoFactory',todoFactory);

}());
