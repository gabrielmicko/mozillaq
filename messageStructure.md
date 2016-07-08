basic message structure for QuizQuestions

{
  "quizQuestions": [
    {
      "idQuestion": 1, 
      "rightAnswers": [
        {"id": 1, "score": 1}
      ], 
      "selectChoices": [
        {"id": 1, "text": "choice 1 - right"}, 
        {"id": 2, "text": "choice 2"}, 
        {"id": 3, "text": "choice 3"}, 
        {"id": 4, "text": "choice 4"}], 
      "textQuestion": "This is the first test Question"
    },
    {
      "idQuestion": 2, 
      "rightAnswers": [
        {"id": 3, "score": 1},
        {"id": 4, "score": 12}
      ], 
      "selectChoices": [
        {"id": 1, "text": "choice 1"}, 
        {"id": 2, "text": "choice 2"}, 
        {"id": 3, "text": "choice 3 - right"}, 
        {"id": 4, "text": "choice 4 - right"}], 
      "textQuestion": "This is the second test Question"
    }
  ]
}