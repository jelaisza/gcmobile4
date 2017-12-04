var app = angular.module('starter.controllers', ['ionic','ngFitText'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('Menu', function ($scope, $state,$window) {

		$scope.logout = function(){
				$window.localStorage.clear();
				$window.location.reload();
			}

			$scope.profile = function(){


			};


})

.controller('login', function ($scope, $http, $state,$ionicPopup,$ionicLoading) {
   $scope.loginform = function (){
    var username = $scope.username;
    var password = $scope.password;

    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $http({
        url: 'http://192.168.43.53/gcmobile4/php/login.php',
        method: "POST",
        data: {
            'username' : username,
            'password' : password
        }
    })


    .then(function(response){
        var data = response.data[0];
        if(data != "Account Doesn't exist!"){
			$scope.showConfirm = function(){
				$ionicLoading.show({
					template: '<center><img src="img/loading.gif" width=50% height=50%><br>Logging in to your account..</center>',
					duration: 3000
				});

			$scope.username = '';
		    $scope.password = '';
            $state.go('app.home1');
            localStorage.setItem("name",data);
			};
			$scope.hideLoading = function(){
				$ionicLoading.hide();
				 $scope.username = '';
				 $scope.password = '';
			};
        }
		else{

Alert("Incorect");

            $scope.error = data;
            $scope.password = '';
        }
    },
    function(response){
    });
   }
})


.controller("FirstCtrl",['$scope','$http', function($scope,$http){


  getInfo();
  function getInfo(){


  $http.post('http://192.168.43.53/gcmobile4/php/medicineDetails.php').success(function(data){
  // Stored the returned data into scoper
  $scope.details = data;
  });
  }

}])

.controller("SecondCtrl",['$scope','$http', function($scope,$http,$ionicModal){

  getInfo();
  function getInfo(){

  $http.post('http://192.168.43.53/gcmobile4/php/announcementDetails.php').success(function(data){
  // Stored the returned data into scoper
  $scope.details = data;
  });
  }

}])


.controller('name', function($scope, $http,$state) {
	setInterval(function(){

	var acc = localStorage.getItem("name");

	  $scope.profile = [{
		  name : acc
	  }];

	getInfos();
	function getInfos(){

		$http.post('http://192.168.43.53/gcmobile4/php/account_pull.php',{"accn":getInfos.acc = localStorage.getItem("name")}).success(function(data){
			$scope.accountInfo = data;

		});
	}

	$scope.currentUser = {};
	$scope.myVar = false;
	$scope.editInfo = function(info){
	$scope.myVar = !$scope.myVar;
	$scope.currentUser = info;
	}

	}, 5000)

})


.controller('account', function($scope,$http,$state,$window) {
	 $scope.doRefresh = function() {
			$window.location.reload();
	};
var myVar = setInterval(function() { myTimer()}, 200);
  function myTimer(){
  var data = localStorage.getItem("name");

  $scope.profile = [{
	  name : data
  }];
  }



})

.controller('AccountCtrl', function($scope, $http,$state) {
	setInterval(function(){

	var acc = localStorage.getItem("name");


	  $scope.profile = [{
		  name : acc
	  }];

	getInfos();
	function getInfos(){

		$http.post('http://192.168.43.53/gcmobile4/php/account_pull.php',{"accn":getInfos.acc = localStorage.getItem("name")}).success(function(data){
			$scope.accountInfo = data;

		});
	}

	$scope.currentUser = {};
	$scope.myVar = false;
	$scope.editInfo = function(info){
	$scope.myVar = !$scope.myVar;
	$scope.currentUser = info;
	}
	$scope.UpdateInfo = function(info){

	$http.post('http://192.168.43.53/gcmobile4/php/updateDetails.php',{"id":info.id,"uname":info.username,"address":info.address,"contact":info.contact}).success(function(data){
	if (data == true) {
	getInfos();
	}
	});
	}


	}, 5000)

});
