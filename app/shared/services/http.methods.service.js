(function(){
    'use strict';

    const HttpMethodService = function($http, $q){
        var service = this;
        var url = 'http://192.168.174.128:4040/'
        
        service.save = Post;
        service.update = Put;
        service.get = Get;
        service.remove = Delete;

        function Post(resourceUrl, client) {
            var json = JSON.stringify(client);
            var deferred = $q.defer();
            
            $http.post(url.concat(resourceUrl), json)
                .success(function (data, status) {
                    deferred.resolve(data);
                    console.log('Deu certo!!');
                }).error(function (data, status) {
                    deferred.reject(status);
                    console.log('Deu erro...');
                });
            
            return deferred.promise;
        }

        function Put(resourceUrl, client) {
            var json = JSON.stringify(client);
            var deferred = $q.defer();

            $http.put(url.concat(resourceUrl), json)
                .success(function (data, status) {
                    deferred.resolve(data);
                    console.log('Deu certo!!');
                }).error(function (data, status) {
                    deferred.reject(status);
                    console.log('Deu erro...');
                });

            return deferred.promise;
        }

        function Delete(resourceUrl, id) {
            var deferred = $q.defer();

            $http.delete(url.concat(resourceUrl).concat('/' + id))
                .success(function (data, status) {
                    deferred.resolve(data);
                    console.log(status + 'Deu certo!');
                })
                .error(function (data, status) {
                    deferred.reject(status);
                    console.log(status + "Erro!!");
                });

            return deferred.promise;
        }

        function Get(resourceUrl) {
            var deferred = $q.defer();
            $http.get(url.concat(resourceUrl))
                .success(function (data, status) {
                    deferred.resolve(data);
                    console.log(status + ' Listou!');
                })
                .error(function (data, status) {
                    deferred.reject(status);
                    console.log(status + ' Erro na lista!');
                });

            return deferred.promise;
        }
    }

    HttpMethodService.$inject = ['$http', '$q'];

    angular.module('app.shared').service('httpMethodService', HttpMethodService);
})();