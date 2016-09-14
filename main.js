angular.module('routerApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/about');

        $stateProvider.state('getStarted',
            {
                url: '/get-started',
                templateUrl: 'partical-get-started.html',
                controller: function($scope) {
                    $scope.cards = [
                        {name: 'card1', text: 'some text'},
                        {name: 'card2', text: 'some text'},
                        {name: 'card3', text: 'some text'},
                        {name: 'card4', text: 'some text'}
                    ];

                    $scope.addCard = function () {
                        $scope.newCard = $scope.cards.length + 1;
                        $scope.cards.push({name: 'card' + $scope.newCard, text: $scope.newText});
                        $scope.newText = '';

                    };
                }
            })

        $stateProvider.state('showCards',
            {
                url: '/show-cards',
                templateUrl: 'partical-show-cards.html',
                controller: function($scope) {
                    $scope.cards = [
                        {name: 'done1', text: 'some text'},
                        {name: 'done2', text: 'some text'},
                        {name: 'done3', text: 'some text'},
                        {name: 'done4', text: 'some text'},
                        {name: 'done5', text: 'some text'}
                    ];

                    $scope.addCard = function () {
                        $scope.newCard = $scope.cards.length + 1;
                        $scope.cards.push({name: 'done' + $scope.newCard, text: $scope.newText});
                        $scope.newText = '';
                    }
                }
            });

        $stateProvider.state('editCards',
            {
                url:'/edit-cards',
                templateUrl: 'partical-edit-cards.html',
                controller: 'editCardsCtrl'
            });

    });


angular.module('routerApp').controller('editCardsCtrl', function($scope) {
        $scope.cards = [
            {name: 'card1', text: 'some text'},
            {name: 'card2', text: 'some text'},
            {name: 'card3', text: 'some text'},
            {name: 'card4', text: 'some text'}
        ];

        $scope.addCard = function () {
            $scope.newCard = $scope.cards.length + 1;
            $scope.cards.push({name: 'card' + $scope.newCard, text: $scope.newText});
            $scope.newText = '';

        };

    $scope.editCard = function (card) {
        card.edition = true;
        card.editedCard = card.text;
    };

    $scope.changeCard = function (card) {
        card.text = card.editedCard;
        card.edition = false;
    };

    $scope.changeCancel = function (card) {
        card.edition = false;
    };
    
    $scope.removeCard = function(card) {
        $scope.cards.splice($scope.cards.indexOf(card), 1);
    };

});