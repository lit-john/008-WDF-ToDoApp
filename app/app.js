(function() {

    var app = angular.module('todoApp', ['ngRoute', 'ngAnimate', 'ngMaterial', 'ngMessages']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'todoController',
                templateUrl: 'app/views/todo.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

}());
