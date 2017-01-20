/*
  configurasi untuk routing
  pada aplikasi
  dimana yang mengatur routes
  app...
*/

app.config(
  function($routeProvider ,$locationProvider,localStorageServiceProvider) {
    $locationProvider.html5Mode(false).hashPrefix('✓')
    $routeProvider
      .when('/',{
         templateUrl :View+"/home.html",
         controller  :"ctrlhome"
        })
      .when('/home',{
          templateUrl :View+"/404.html",
         controller  :"ctrlhome"
      })
       .otherwise({
         templateUrl:View+"/404.html"   
      })
     ;
     
    }
    );
