angular.module('starter.factories', [])

.factory('Messages', function(){
     var messages = [
        {
            user: {
                name: 'Albert Valls',
                face: 'img/albert.jpg'
            },
            message: "Hey guys, how are you?",
            location: 'fackelocation'    
        }
    ];
    
    return {
        all: function(){
            return messages;
        }
    }
})