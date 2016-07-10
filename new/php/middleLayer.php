<?php
    require 'dbConnection.php';

    getDBLogin();

    if($_SERVER['REQUEST_METHOD'] == "POST"){

        $messageRequest = json_decode(file_get_contents('php://input'), true);

        if($messageRequest['messageName'] == "getQuiz"){

            $language = $messageRequest['language'];

            $returnArray = getLanguageFilteredQuestions($language);
            $responseArray = array();

            foreach($returnArray as $quizElement){

                $tempArray=array(
                'idQuestion'=> $quizElement['idQuestion'],
                'textQuestion'=> $quizElement['textQuestion'],
                'selectChoices' => getLanguageFilteredAnswers($language,$quizElement['idQuestion']),
                'rightAnswers' => getIdFilteredRightAnswers($quizElement['idQuestion'])
                );

                array_push($responseArray,$tempArray);
            }

            $messageResponse = array(  "messageName" => "returnQuizQuestions", "quizQuestions" => $responseArray);
        }else{
            $messageResponse = array("status" => 2, "msg" => $messageRequest['messageName']);
        }

    }else{
        $messageResponse = array("status" => 0, "msg" => "Request method not accepted only POST messages are accepted!");
    }

    /* Output header */
    header('Content-type: application/json');
    echo json_encode($messageResponse);

    close_connection();

?>
