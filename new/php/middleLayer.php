<?php
    require 'dbConnection.php';

    getDBLogin();

    if($_SERVER['REQUEST_METHOD'] == "POST"){

        $language = "en";

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

        $json = array(  "messageName" => "returnQuizQuestions", "quizQuestions" => $responseArray);

    }else{
        $json = array("status" => 0, "msg" => "Request method not accepted only POST messages are accepted!");
    }

    /* Output header */
    header('Content-type: application/json');
    echo json_encode($json);

    close_connection();

?>
