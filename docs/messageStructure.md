###############
##> Request <##
###############

#> Quiz Question request

{
  "messageName": "getQuiz", 
  "language": "en", 
  "quiztype": 1
}


################
##> Response <##
################

#> Quiz Question response

{
  "messageName": "returnQuizQuestions", 
  "quizQuestions": [
    {
      "idQuestion": 1,
      "rightAnswers": [
        {"idChoice": 1, "score": 1}
      ],
      "selectChoices": [
        {"idChoice": 1, "textChoice": "choice 1 - right"},
        {"idChoice": 2, "textChoice": "choice 2"},
        {"idChoice": 3, "textChoice": "choice 3"},
        {"idChoice": 4, "textChoice": "choice 4"}],
      "textQuestion": "This is the first test Question"
    },
    {
      "idQuestion": 2,
      "rightAnswers": [
        {"idChoice": 3, "score": 1},
        {"idChoice": 4, "score": 12}
      ],
      "selectChoices": [
        {"idChoice": 1, "textChoice": "choice 1"},
        {"idChoice": 2, "textChoice": "choice 2"},
        {"idChoice": 3, "textChoice": "choice 3 - right"},
        {"idChoice": 4, "textChoice": "choice 4 - right"}],
      "textQuestion": "This is the second test Question"
    }
  ]
}
