<?php

include 'mymysqli.php';
$mysqli = new Mymysqli();
$mysqli->utf8();

if(!empty($_POST)){
    $total = 0;
    switch($_POST['type']){
	case 'dev':
	    $gResult = array(
		'1'=>'3',
		'2'=>'1',
		'3'=>'2',
		'4'=>'2',
		'5'=>'3',
		'6'=>'4',
		'7'=> '2',
		'8'=>'2',
		'9'=>'3',
		'10'=>'2',
		'11'=>'1',
		'12'=>'3',
		'13'=>'1',
		'14'=>'2',
		'15'=>'4',
		'16'=>'2',
		'17'=>'3',
		'18'=>'2',
		'19'=>'3',
		'20'=>'1',
		'21'=>array('2','4', '5', '6', '7', '9'),
		'22'=>'1',

	    );
	    $max = 27;
	    break;
	case 'beginner':
	    $gResult = array(
		'1'=>array('3','4'),
		'2'=>array('1', '2', '3','4'),
		'3'=>'2',
		'4'=>array('1', '2', '3','4'),
		'5'=>'1',
		'6'=>'1',
		'7'=>'1',
		'8'=>'2',
		'9'=>'3',
		'10'=>array('1', '2', '3'),
		'11'=>'1',
		'12'=>array('1', '2'),
		'13'=>'1',
		'14'=>'2',
		'15'=>'1',
		'16'=>'2',
		'17'=>'2',
		'18'=>'4',
		'19'=>'3',
		'20'=>'3',
		'21'=>'2',
		'22'=>'3',
		'23'=>'1',
		'24'=>'3',
		'25'=>array('1', '2', '3','4'),
		);
	    $max = 38;
	    break;
	case 'moz':
	    break;
	default:

    }
    $points = 0;
    $questions = array();
    $survey_data = array();
    $_POST = $mysqli->real_escape_array($_POST);
    $totalM = 0;
    foreach($_POST as $key=>$value){
	if(preg_match('/^question_[0-9]{1,2}$/', $key)){
	    $totalM++;
	    $questions[$key]=$value;
	    $postKey = str_replace('question_', '', $key);
	    if(is_array($value)){
		foreach ($value as $kkey=>$vvalue){
		    if(in_array($vvalue, $gResult[$postKey])){
			$points++;
		    }
		}
	    }else{
		if($gResult[$postKey] == $value){
		    $points++;
		}
	    }
	}
	if(preg_match('/^survey$/', $key)){
	    $survey_data[$key]=$value;
	}
    }

    $save = array();
    $save['survey_results'] = (serialize($questions));
    $save['survey_text'] =  (serialize($survey_data));
    $save['client_name'] = $_POST['client_name'];
    $save['type'] = $_POST['type'];
    $save['name'] = (!empty($_POST['name'])) ? $_POST['name'] : null;
    $save['email'] = (!empty($_POST['email'])) ? $_POST['email'] : null;
    $save['date'] = date('Y-m-d H:i:s');
    $save['points'] = $points;


    if(isset($_POST['survey_newsletter']) && $_POST['survey_newsletter'] == 'on'){
	$save['survey_newsletter'] = 1;
    }

    try{
	if($totalM < 10) {
	    throw new Exception('Kvíz kitöltéséhez min. 10 kérdésre válaszolnod kell!');
	}

	if (is_null($save['name']) || !preg_match("/^[a-zA-Z ]*$/", $save['name'])) {
	    throw new Exception('A név helyetelen.');
	}

	if (strlen($save['name']) <= 5) {
	    throw new Exception('Kérlek valós nevet adj meg!');
	}

	if (is_null($save['email']) || !preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $save['email'])) {
	    throw new Exception('Az e-mail helyetelen.');
	}
	$json = array(
	    'result' => 'true',
	    'msg' => 'Sikeresen kitöltötted a tesztet. Elért pontszám: '.$points. '.'
	);
	$save = $mysqli->real_escape_array($save);
	$mysqli->insert($save, 'mozq_results');

    } catch (Exception $ex) {
	$json = array(
	    'result' => 'false',
	    'msg' => $ex->getMessage()
	);
    }
    echo json_encode($json);
}else{

    if(!empty($_GET['date']) && !empty($_GET['type'])){
	$date = $mysqli->real_escape_string($_GET['date']);
	$type = $mysqli->real_escape_string($_GET['type']);
	$select = 'SELECT `name`, `points` FROM mozq_results WHERE DATE(date) = "'.$date.'" AND type="'.$type.'"  ORDER BY points  DESC, name ASC';
    }
    if(!empty($_GET['all']) && !empty($_GET['type'])){
	$type = $mysqli->real_escape_string($_GET['type']);
	$select = 'SELECT `name`, `points` FROM mozq_results WHERE type="'.$type.'" ORDER BY points  DESC, name ASC';
    }

    if((!empty($_GET['all']) || !empty($_GET['date'])) && !empty($_GET['type'])){
	$result =  $mysqli->select($select);

	if(isset($result['empty'])){

	    $res = array(
		'result' => false,
		'msg' => 'Nincs eredménye a keresésnek!'
	    );
	}else{
	    $res = array(
		'result' => true,
		'msg' => $result
	    );
	}
	echo json_encode($res);
    }

}
?>
