(function() {

  'use strict';

  angular
    .module('myApp.components.main')
    .service('mainService', mainService);

  mainService.$inject = ['$http'];

  const baseUrl = 'http://api.giphy.com/v1/gifs/search?q=funny+cat';
  const apiKey = '&api_key=dc6zaTOxFJmzC';

  function mainService($http) {
    /*jshint validthis: true */
    this.images = {};
    this.getGiphy = () => {
      return $http.get(baseUrl + apiKey)
      .success((data) => {
        this.images.data = data.data;
      })
      .error((err) => {
        console.log(err, 'Fail');
      });
    };
  }

})();
