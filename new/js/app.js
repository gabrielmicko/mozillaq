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

function pageChange(page) {
    var location = "#"
    if (page == 1) {
        //language selected only
        location += "quizPage?language=" + $('#select-language').val();
    } else if (page == 2) {
        location += "selectLanguage";
    } else {
        var parts = page.split('-');
        location += "quizPage?quiztype=" + parts[1] + "&language=" + $.urlParam("language");
        $("#quizMenuPanel").panel("close");
    }

    window.location.href = location;
}
