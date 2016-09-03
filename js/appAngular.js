angular.module('storeApp', [])
  .controller('storeControllert', function($scope, $timeout) {
    $scope.products = null;
  })
  .controller('adminController', function($scope) {
    //   Save Products onto Firebase
    $scope.saveProduct = function() {

        if(writeNewProduct($scope.name, $scope.price, $scope.description)){
            $scope.name = '';
            $scope.description = '';
            $scope.price = '';
        }
        uploadcare.openDialog(null, {
          crop: "disabled",
          imagesOnly: true
        }).done(function(file) {
          file.promise().done(function(fileInfo){
              console.log(fileInfo.cdnUrl);
          });
        });

      };
  });
