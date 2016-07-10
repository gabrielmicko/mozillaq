function getQuestions() {

    var hostname = $(location).attr('hostname');
    //var url = 'http://' + hostname + "/server/api.php";
    var url = 'http://localhost/mozillaq-master/new/php/middleLayer.php';
    var requestMessage = '{"messageName":"getQuiz","quiztype":' + $.urlParam("quiztype") + ',"language":"' + $.urlParam("language") + '"}';

    var posting = $.post(url, requestMessage, null, "json");
    //var posting = $.post(url, requestMessage);
    posting.done(function (data) {
        /*console.log(data);*/
        afterDateLoad(data);
    });

}

function afterDateLoad(jSONMessageArray) {
    populateQuestions(jSONMessageArray).done(function () {
        visualizeQuestions();
    });
}

function populateQuestions(inArray) {
    var notifier = $.Deferred();
    var questionElement;

    inArray.quizQuestions.forEach(function (entry, i) {
        questionElement = {};
        questionElement = entry;

        questionElement.multiSelect = 0;

        if (entry.rightAnswers.length > 1) {
            questionElement.multiSelect = 1;
        }

        collections.quizQuestions.push(questionElement);

        if (inArray.quizQuestions.length - 1 == i) {
            notifier.resolve();
        }
    });

    //return $.when(dfrd1, dfrd2)
    return $.when(notifier).done(function () {
        // Both asyncs tasks are done
    }).promise();
}

function visualizeQuestions() {

    angular.element($('#quizMainList')).scope().updateQuizList();
    $('[data-role="controlgroup"]').trigger("create");
    $('[data-role="controlgroup"]').controlgroup().controlgroup("refresh");

}

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
};
