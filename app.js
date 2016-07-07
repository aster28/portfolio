 
     var app = angular.module('plunker',[]);
app.controller('MainCtrl', function($scope) {
$scope.todos = []
$scope.todoList = "";
$scope.addTodo = function(){
  $scope.todos.push($scope.todoList)
}
$scope.clearAll = function(){
  $scope.todos = []
 }
});
    
