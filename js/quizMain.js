function getQuestions(selectedLanguage) {
    var questionJSON = "";
    questionJSON += '{';
    questionJSON += '"quizQuestions": [';
    questionJSON += '{';
    questionJSON += '"idQuestion": 1, ';
    questionJSON += '"rightAnswers": [';
    questionJSON += '{"id": 1, "score": 1}';
    questionJSON += '], ';
    questionJSON += '"selectChoices": [';
    questionJSON += '{"id": 1, "text": "choice 1 - right"}, ';
    questionJSON += '{"id": 2, "text": "choice 2"}, ';
    questionJSON += '{"id": 3, "text": "choice 3"}, ';
    questionJSON += '{"id": 4, "text": "choice 4"}], ';
    questionJSON += '"textQuestion": "Question 1 - This is the first test Question"';
    questionJSON += '},';
    questionJSON += '{';
    questionJSON += '"idQuestion": 2, ';
    questionJSON += '"rightAnswers": [';
    questionJSON += '{"id": 3, "score": 1},';
    questionJSON += '{"id": 4, "score": 12}';
    questionJSON += '], ';
    questionJSON += '"selectChoices": [';
    questionJSON += '{"id": 1, "text": "choice 1"}, ';
    questionJSON += '{"id": 2, "text": "choice 2"}, ';
    questionJSON += '{"id": 3, "text": "choice 3 - right"}, ';
    questionJSON += '{"id": 4, "text": "choice 4 - right"}], ';
    questionJSON += '"textQuestion": "Question 2 - This is the second test Question"';
    questionJSON += '}';
    questionJSON += ']';
    questionJSON += '}';


    questionJSON = JSON.parse(questionJSON);
    afterDateLoad(questionJSON);

    /*      var url = "http://94.177.247.68:8080/victor/pretto3Get";
            var requestMessage = '{"language":"en"}'
            var posting = $.post(url, requestMessage);

        posting.done(function (data) {
            console.log(data);
            afterDateLoad(JSON.parse(data));

        });
    */
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
        questionElement = entry;
        questionElement.multiSelect = 0;

        if (entry.rightAnswers.length > 1) {
            questionElement.multiSelect = 1;
        }


        collections.quizQuestions.push(questionElement);
        console.log(questionElement);

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
