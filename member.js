function skillsmember() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'app/views/skills-member.html',
        controller: function ($scope) {
            $scope.show = false;
            $scope.toggle = function () {
                $scope.show = !$scope.show;
            };
        }
    };
}