/*
  deklarasi semua modue yang
  akan di pergunakan pada aplikasi ini
  dan configurasi frontend global
*/

var sitename ="ABJ ";

var View = "./view";

var server= {
   host : 'localhost',
   port : '80'
};

var Controller = "./controller";
var app = angular.module("myapp",
          [
            'ngRoute'
          ]
);
