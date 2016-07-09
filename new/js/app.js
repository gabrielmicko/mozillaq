var collections = {
    quizQuestions: []
}

$(document).on("pagechange", function (event) {});

$(document).ready(function () {
    getQuestions("en");
});

var app = angular.module('QuizApp', []);

app.controller('quizAppController', ['$scope', function ($scope) {
    $scope.quizList = collections.quizQuestions;

    $scope.updateQuizList = function () {
        $scope.quizList = collections.quizQuestions;
        $scope.$apply();
    };

}]);
