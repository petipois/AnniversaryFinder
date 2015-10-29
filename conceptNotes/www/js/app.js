(function(){// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('gameIdea', ['ionic'])
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')
  $stateProvider.state('home',{
    url:'/home',
    views:{
      home:{
        templateUrl:'pages/home.html',
        controller:'HomeCtrl'
      }
    }
  })
   $stateProvider.state('idea',{
    url:'/idea',
    views:{
      idea:{
    templateUrl:'pages/idea.html',
          controller:'HomeCtrl'
      }
    }
  })
})
app.controller('HomeCtrl',function($scope){
     $scope.concepts = []
       $scope.displayData = function()
       {
            
         var gameList = JSON.parse(window.localStorage.getItem(["game"]));
         var i = 0;
         if(window.localStorage.getItem(["game"])!=null)
         {
           angular.forEach(gameList, function(key, value){
               $scope.concept = {
                   'title':key.title,
                   'genre':key.genre,
                   'artstyle':key.artstyle,
                   'players':key.players,
                   'monetize':key.monetize,
                   'description':key.description,
                   'dateCreated':key.dateCreated
               }
                $scope.concepts.push($scope.concept);
           })
         }
         
       }
       $scope.displayData();
  $scope.saveData = function()
  {
   window.localStorage['game'] = JSON.stringify($scope.concepts);  
    window.location.href = '/#/home';
      window.location.reload(true);
    //go to home page
  }
$scope.addData = function(idea)
  {
   $scope.concept = {
    'title':idea.title,
    'genre':idea.genre,
    'artstyle':idea.artstyle,
    'players':idea.players,
    'monetize':idea.monetize,
    'description':idea.description,
    'dateCreated':idea.dateCreated
   }
   $scope.concepts.push($scope.concept);
   $scope.saveData();
  }
$scope.editIdea = function(idea)
{
    alert(idea.description);    
}
$scope.deleteIdea = function(idea)
{
    console.log($scope.concepts.indexOf(idea));
    //refresh page
    $scope.concepts.splice($scope.concepts.indexOf(idea),1);
    $scope.saveData();
}
})
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
}())