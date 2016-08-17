/*
  configurasi untuk routing
  pada aplikasi
  dimana yang mengatur routes
  app...
*/

app.config(['$routeProvider',
  function($routeProvider ,localStorageServiceProvider) {

    $routeProvider
      .when('/',{
         templateUrl :View+"/home.html",
         controller  :"ctrlhome"
        })
       .otherwise({
         templateUrl:View+"/404.html"
      })
    }
  ,]);
