angular.module('starter.controllers', [])

.controller('ChatCtrl', function($scope, $timeout, $ionicScrollDelegate, Messages){
    
    this.isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();
    
    $scope.messages = Messages.all();
    
    $ionicScrollDelegate.scrollBottom(true);
    
    $scope.sendMessage = function() {
        $ionicScrollDelegate.scrollBottom(true);
    };
    
    $scope.inputUp = function(){
        if (this.isIOS) $scope.data.keyboardHeight = 216;
        $timeout(function(){
            $ionicScrollDelegate.scrollBottom(true);
        }, 300);
    };
    
    $scope.inputDown = function(){
        if(this.isIOS) $scope.data.keyboardHeight = 0;
        $ionicScrollDelegate.resize();
    };
})

.controller('SettingsCtrl', function($scope){
    $scope.sendLocation = true;
})

.controller('AccountCtrl', function($scope, LocalProfile){
    $scope.user = LocalProfile.user;
})