<?php

    $config_file = "/var/www/html/mozillaq-master/new/php/mysql.login";
    $conn = null;

    function getDBLogin(){

        global $config_file;
        $nameServer = null;
        $username = null;
        $password = null;
        $nameDatabase = null;

        $configfile = fopen ($config_file,"r") or die ("[ERROR] Unable to open file: ".$config_file);

        while (!feof($configfile)) {
            $line_of_text = fgets($configfile);
            $parts = explode('=', $line_of_text);

            if($parts[0] == "servername"){
                $nameServer = trim($parts[1]);
            }
            elseif($parts[0] == "username"){
                 $username = trim($parts[1]);
            }
            elseif($parts[0] == "password"){
                 $password = trim($parts[1]);
            }elseif($parts[0] == "databasename"){
                 $nameDatabase = trim($parts[1]);
            }
        }
        create_connection($nameServer,$nameDatabase,$username,$password);
    }

    function create_connection($servername,$database,$user,$password){
        try {

            global $conn;
            $conn = new PDO("mysql:dbname=$database;host=$servername;", $user, $password);

            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function close_connection(){
        global $conn;
        $conn = null;
    }

    /* Query statements */

    function getLanguageFilteredQuestions($selectedLanguage){
        global $conn;

        $sql = "SELECT * FROM quizQuestions WHERE quizLanguage='".$selectedLanguage."';";

        $returnResult = array();

        foreach ($conn->query($sql) as $row)
        {
            $element  = array('idQuestion' => $row['idQuestion'],'textQuestion' => $row['textQuestion']);
            array_push($returnResult,$element);
        }
        return $returnResult;
    }

    function getLanguageFilteredAnswers($selectedLanguage,$idQuestion){
        global $conn;

        $sql = "SELECT * FROM quizQuestionChoices WHERE quizLanguage='".$selectedLanguage."' AND idQuestion=".$idQuestion.";";

        $returnResult = array();

        foreach ($conn->query($sql) as $row)
        {
            $element  = array('idChoice' => $row['idChoice'],'textChoice' => $row['textChoice']);
            array_push($returnResult,$element);
        }
        return $returnResult;
    }

    function getIdFilteredRightAnswers($idQuestion){
        global $conn;

        $sql = "SELECT * FROM rightAnswers WHERE idQuestion=".$idQuestion.";";

        $returnResult = array();

        foreach ($conn->query($sql) as $row)
        {
            $element  = array('idChoice' => $row['idChoice'],'score' => $row['score']);
            array_push($returnResult,$element);
        }
        return $returnResult;
    }
?>
