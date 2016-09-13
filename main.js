angular.module('routerApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/about');

        $stateProvider.state('showCards',
            {
                url: '/show-cards',
                templateUrl: 'partical-show-cards.html',
                controller: 'showCardsCtrl'
            });

        $stateProvider.state('home.list',
            {
               url:'/list',
                templateUrl: 'partical-show-cards.html'
            });

        $stateProvider.state('getStarted',
            {
                url:'/get-started',
                templateUrl: 'partical-get-started.html',
                controller: function($scope) {
                    $scope.cards = [
                        {name: 'card1', text: '1'},
                        {name: 'card2', text: '1'},
                        {name: 'card3', text: '1'},
                        {name: 'card4', text: '1'}
                    ];

                    $scope.addCard = function () {
                        $scope.newCard = $scope.cards.length + 1;
                        $scope.cards.push({name: 'card' + $scope.newCard, text: $scope.newText});
                        $scope.newText = '';

                    };
                }
            });
    });

angular.module('routerApp').controller('showCardsCtrl', function($scope) {
    $scope.cards = [
        {name: 'done card1', text: '1'},
        {name: 'done card2', text: '1'},
        {name: 'done card3', text: '1'},
        {name: 'done card4', text: '1'},
        {name: 'done card5', text: '1'}
    ];

    $scope.addCard = function () {
        $scope.newCard = $scope.cards.length + 1;
        $scope.cards.push({name:'done card' + $scope.newCard, text: $scope.newText});
        $scope.newText = '';

    };
});