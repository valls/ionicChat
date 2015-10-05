angular.module('starter.services', [])

.service('LocalProfile', function(){
    this.user = {
        id: 1,
        name: 'Albert Valls',
        face: 'img/albert.jpg',
        settings: {
            sendLocation: true
        }
    };
})