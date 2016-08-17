app.controller("ctrlhome", function($rootScope,$scope,localStorageService) {
    $rootScope.header = sitename+"|Home";
    $scope.name = "ABJ"
    $scope.title = "Angular , Bootstrap , Jquery";
    $scope.message ="Merupakan kerangka kerja Frontend untuk mempermudah"+
                    " pengerjaan aplikasi web ."


    //function  tambahkan isi localstorage
    $scope.set_local = function(){
      localStorageService.set($scope.name, $scope.title);
    }


});
